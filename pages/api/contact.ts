export default function (req: any, res: any) {
    let nodemailer = require('nodemailer')
    console.log(req.body)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        },
    })
    let mailOptions = {
        from: 'ericmingyt@gmail.com',
        to: 'ericming24@gmail.com',
        subject: 'Housling email from : ' + req.body.name,
        text: req.body.email + req.body.message,
    }
    transporter.sendMail(mailOptions, function (err: any, info: any) {
        if (err) console.log(err)
        else console.log(info)
    })
    console.log('exiting api')
    res.status(200)
}
