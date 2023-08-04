import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { name, email, message } = JSON.parse(req.body);

  // Set up your Gmail account SMTP configuration
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: 'recipient-email@example.com', // Replace with your recipient email address
      subject: 'New Contact Form Submission',
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    return res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'An error occurred while sending the email' });
  }
}
