export default function (req, res) {
    let nodemailer = require('nodemailer')
    console.log(req.body)
    console.log(process.env.MAIL_USERNAME)
    console.log(process.env)
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
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) console.log(err)
        else console.log(info)
    })
    console.log('exiting api')
    res.status(200)
}
