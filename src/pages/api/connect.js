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
            subject: 'New Bears Digital Connection',
            html: `
            <div style="font-family: Arial, sans-serif; padding: 16px; background-color: #131415; color: #fff; width: 56%; height: fit-content;">
                <span style="color: #A2A2A2; font-size: 12px; text-transform: uppercase; margin-bottom: 8px;">Bears Digital</span>
                <h3 style="margin-bottom: 8px; color: #fff;">${subject}</h3>
                <hr style="border: none; border-bottom: 1px solid rgba(255, 255, 255, .4); width: 100%; margin-bottom: 8px;">
                <p style="margin-bottom: 8px; color: #fff;"><span style="color: #A2A2A2;">from:</span> ${name}, ${email}</p>
                <p style="margin-bottom: 8px; color: #fff;"><span style="color: #A2A2A2;">reply-to:</span> ${email}</p>
                <p style="margin-bottom: 8px; color: #fff;"><span style="color: #A2A2A2;">phone-number:</span> ${phone}</p>
                <p style="margin-bottom: 8px; color: #fff;"><span style="color: #A2A2A2;">subject:</span> ${subject}</p>
                <p style="margin-bottom: 256px; color: #fff;"><span style="color: #A2A2A2;">message:</span> ${message}</p>
                <div style="width: 100%; text-align: end;">
                    <span style="color: #A2A2A2; font-size: 12px; text-transform: uppercase;">© 2023 Bears Digital</span>
                </div>
            </div>`,
        })

        return res.status(200).json({ message: 'Your email was successfully sent.' })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Your email could not be sent. Please try again.'
        })
    }
}