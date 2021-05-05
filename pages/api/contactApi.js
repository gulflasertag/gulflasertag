import nodemailer from 'nodemailer';
require('dotenv').config()

console.log('Message Sent');

export default async (req, res) => {
    const {name, email, message, phone} = req.body;

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'washermind99@gmail.com',
            pass: process.env.password
        },
        secure: true
    })
    console.log('Message Sent');

    try {
        await transporter.sendMail({from: 'washermind99@gmail.com', to: 'krantitherevolution99@gmail.com', subject: `Contact form submission from ${name}`, html: `<p>You have a new contact form submission</p><br>
          <p><strong>Name: </strong> ${name} </p><br>
          <p><strong>Phone: </strong> ${phone} </p><br>
          <p><strong>Message: </strong> ${message} </p><br>
          `});
        console.log('Message Sent');
        //     const mailData = {
        //         from: 'washermind99@gmail.com',
        //         to: 'krantitherevolution99@gmail.com',
        //         subject: `Message From ${
        //             req.body.name
        //         }`,
        //         text: req.body.message + " | Sent from: " + req.body.email,
        //         html: `<div>${
        //             req.body.message
        //         }</div><p>Sent from:
        // ${
        //             req.body.email
        //         }</p>`
        //     }
        // transporter.sendMail(mailData, function (err, info) {
        //     if (err)
        //         console.log(err)
        //      else
        //         console.log(info)
        // })
    } catch (err) {
        console.log(err);
    }
    res.status(200).json(req.body);
}
