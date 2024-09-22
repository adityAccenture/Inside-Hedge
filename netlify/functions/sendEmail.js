const emailjs = require("emailjs-com");

exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);

  const userInfo = {
    from_name: data.name,
    email: data.email,
    mobileNumber: data.mobileNumber,
    message: data.message,
  };

  try {
    // Initialize EmailJS with your user ID
    emailjs.init("gbWrenUBBiXn5a2OG");

    // Send the email using EmailJS service
    const response = await emailjs.send(
      "service_7ok90id", // Replace with your EmailJS service ID
      "template_q9iayhh", // Replace with your EmailJS template ID
      userInfo
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Email sending failed: ", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Email sending failed", error }),
    };
  }
};
