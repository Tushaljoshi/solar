const client = require('../config/twilio');

const sendWhatsAppConfirmation = async ({ name, phone }) => {
  if (!name || !phone) {
    throw new Error('Missing name or phone number for WhatsApp message');
  }

  try {
    const response = await client.messages.create({
      from: `whatsapp:${process.env.TWILIO_PHONE}`,
      to: `whatsapp:+91${phone}`,  // Replace or parameterize country code if needed
      body: `Hi ${name}, thanks for contacting us! We’ll get back to you shortly.`,
    });

    console.log('✅ WhatsApp message sent:', response.sid);
  } catch (error) {
    console.error('❌ Failed to send WhatsApp message:', error.message);
    throw new Error('WhatsApp service failed');
  }
};

module.exports = { sendWhatsAppConfirmation };
