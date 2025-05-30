// === contactController.js ===
const axios = require('axios');
const sendEmail = require('../utils/sendEmail');
const twilio = require('twilio');

exports.submitContactForm = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required' });
  }

  const googleFormUrl = process.env.GOOGLE_FORM_URL;
  const entryName = process.env.GOOGLE_ENTRY_NAME;
  const entryEmail = process.env.GOOGLE_ENTRY_EMAIL;
  const entryPhone = process.env.GOOGLE_ENTRY_PHONE;
  const entryMessage = process.env.GOOGLE_ENTRY_MESSAGE;

  const formData = new URLSearchParams();
  formData.append(entryName, name);
  formData.append(entryEmail, email);
  formData.append(entryPhone, phone || '');
  formData.append(entryMessage, message);

  try {
    // Submit to Google Form
    await axios.post(googleFormUrl, formData);

    // Send confirmation email to company and user
    await sendEmail(name, phone, email, message);

    // ✅ Send WhatsApp confirmation message
    const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
    await client.messages.create({
      from: 'whatsapp:+14155238886', // Twilio sandbox number
      to: `whatsapp:+91${phone}`,
      body: `Hello ${name}, 👋tushar this whatsapp Message is working \n\nThanks for contacting *SunTech Power Corporation*! 🌞\n\nWe've received your request and will get back to you within 24 hours.\n\n- Team SunTech`

    });

    res.status(200).json({ message: 'Submission successful' });
  } catch (error) {
    console.error('❌ Submission error:', error.message, error.response?.data);
    res.status(500).json({ message: 'Submission failed', error: error.message });
  }
};