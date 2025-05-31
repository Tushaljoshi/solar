const axios = require('axios');

// Format and validate Indian phone numbers
function formatIndianPhone(phone) {
  const digitsOnly = phone.replace(/\D/g, ''); // Remove all non-digits

  if (digitsOnly.length === 10 && /^[6-9]\d{9}$/.test(digitsOnly)) {
    return `+91${digitsOnly}`;
  } else if (digitsOnly.length === 12 && digitsOnly.startsWith('91')) {
    return `+${digitsOnly}`;
  } else if (digitsOnly.length === 13 && digitsOnly.startsWith('+91')) {
    return digitsOnly;
  } else {
    throw new Error('Invalid Indian phone number format');
  }
}

const sendWhatsappMessage = async (phone, name) => {
  const instanceId = process.env.ULTRAMSG_INSTANCE_ID;
  const token = process.env.ULTRAMSG_TOKEN;

  try {
    const formattedPhone = formatIndianPhone(phone);

    const response = await axios.post(`https://api.ultramsg.com/instance123094/messages/chat`, null, {
      params: {
        token,
        to: formattedPhone,
        body: `Hi ${name},\n\nThanks for reaching out to us.\n\nYour request has been registered, and someone from our team will contact you shortly.\n\nBest,\nSunTech Power Corporation`
      }
    });

    console.log("✅ WhatsApp message sent:", response.data);
  } catch (err) {
    console.error("❌ WhatsApp message failed:", err.response?.data || err.message);
  }
};

module.exports = sendWhatsappMessage;
