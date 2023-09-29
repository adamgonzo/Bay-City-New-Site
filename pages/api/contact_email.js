import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SEND_GRID);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Validate form data
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const msg = {
      to: process.env.NEXT_PUBLIC_EMAIL_SENDER,
      from: process.env.NEXT_PUBLIC_EMAIL_SENDER,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await sgMail.send(msg);
      return res
        .status(200)
        .json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error sending email" });
    }
  }

  return res.status(405).end();
}
