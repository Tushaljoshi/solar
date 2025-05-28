// backend/controllers/contactController.js
const axios = require('axios');
const sendEmail = require('../utils/sendEmail');
const sendWhatsAppConfirmation = require('../utils/whatsappService');

exports.submitContactForm = async (req, res) => {
  const { name, email, phone, message } = req.body;
  const googleFormUrl = process.env.GOOGLE_FORM_URL; // should end with formResponse
  const entryName = process.env.GOOGLE_ENTRY_NAME;
  const entryEmail = process.env.GOOGLE_ENTRY_EMAIL;
  const entryPhone = process.env.GOOGLE_ENTRY_PHONE;
  const entryCompany = process.env.GOOGLE_ENTRY_MESSAGE;
  

  const formData = new URLSearchParams();
  formData.append(entryName, name);
  formData.append(entryEmail, email);
  formData.append(entryPhone, phone);
  formData.append(entryCompany, message);

  try {
    await axios.post(googleFormUrl, formData);
    await sendEmail(name, phone, email, message);
    await sendWhatsAppConfirmation({ name, phone });
    res.status(200).json({ message: 'Submission successful' });
  } catch (error) {
    console.error('Submission error:', error.message, error.response?.data);
    res.status(500).json({ message: 'Submission failed', error: error.message });
  }
  
};

