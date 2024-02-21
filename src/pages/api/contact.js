import nodemailer from "nodemailer";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { name, email, message, phoneNumber, companyName } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: `${process.env.NEXT_PUBLIC_SMTP_USER}`,
      pass: `${process.env.NEXT_PUBLIC_SMTP_PASSWORD}`
    }
  });

  try {

    console.log(email, name, message, phoneNumber, companyName)
    await transporter.sendMail({
      from: `${email}`,
      to: "support@infinanze.com",
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p>
        <p><strong>Company name: </strong> ${companyName}</p>
        <p><strong>Phone Number: </strong> ${phoneNumber}</p>
        <p><strong>Company Email: </strong> ${email}</p>
        <p><strong>Message: </strong> ${message}</p>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ message: "Message Sent Successfully" });
};