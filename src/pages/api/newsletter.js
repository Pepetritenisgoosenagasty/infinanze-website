import nodemailer from "nodemailer";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { email } = req.body;
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
    await transporter.sendMail({
      from: email,
      to: "support@infinanze.com",
      subject: `Newsletter Subscription from ${email}`,
      html: `<p>Newsletter Subscription</p>
        <p><strong>Company Email: </strong> ${email}</p>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};