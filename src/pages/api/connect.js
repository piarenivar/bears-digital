import nodemailer from 'nodemailer'

export default async function ConnectAPI(req, res) {
    const { name, phone, email, subject, message } = req.body;
    const data = { name, phone, email, subject, message };
    const user = process.env.EMAIL;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: process.env.EMAIL_PASS,
        }
    })

    try {
        const mail = await transporter.sendMail({
            from: user,
            to: 'connect@bearsdigital.io',
            replyTo: email,
            subject: 'Bears Digital Contact',
            html: `
            <h1>New contact submission for Bears Digital</h1>
            <ul>
                <li>Name: ${name}</li>
                <li>Phone: ${phone}</li>
                <li>Email: ${email}</li>
                <li>Subject: ${subject}</li>
                <li>Message:</li>
            </ul>
            <p>${message}</p>`,
        })

        return res.status(200).json({ message: 'Your email was successfully sent.' })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Your email could not be sent. Please try again.'
        })
    }
}