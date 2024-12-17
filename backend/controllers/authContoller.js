const nodemailer = require('nodemailer');
const crypto = require('crypto');

const sendOtpEmail = async (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password Reset OTP',
    text: `Your OTP for password reset is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('OTP email sent');
  } catch (error) {
    console.error('Error sending OTP email:', error);
    throw new Error('Error sending OTP');
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const otp = generateOtp();
    await sendOtpEmail(email, otp);
    res.status(200).json({ message: 'OTP sent to your email', otp });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { forgotPassword };