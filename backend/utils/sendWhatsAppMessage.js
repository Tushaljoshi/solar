// backend/utils/sendWhatsAppMessage.js
const twilio = require('twilio');

const sendWhatsAppMessage = async (name, phone) => {
  const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

  try {
    const response = await client.messages.create({
      from: 'whatsapp:+14155238886',
      to: `whatsapp:+91${phone}`,
      body: `Hello ${name}, 👋\n\nThanks for contacting *SunTech Power Corporation*! 🌞\n\nWe've received your request and will get back to you within 24 hours.\n\n- Team SunTech`
    });

    console.log('✅ WhatsApp message sent:', response.sid);
  } catch (err) {
    console.error('❌ Failed to send WhatsApp message:', err.message);
    throw err;
  }
};

module.exports = sendWhatsAppMessage;
