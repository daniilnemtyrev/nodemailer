export default function (req, res) {

    require('dotenv').config()
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'kdonzol69@gmail.com',
          pass: process.env.password,
        },
        secure: true,
      });

      const mailData = {
        from: 'kdonzol69@gmail.com',
        to: req.body.email,
        subject: `Message From ${req.body.name}`,
        text: req.body.message,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
       }

       transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })

      console.log(req.body.email)
      res.status(200).end()
  }