const router = require("express").Router();
const Products = require("../models/Products");
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
    const {name, email, message} = req.body;

    const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>  
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            </ul>
            <h3>Message</h3>
            <p>${message}</p>
            `;
    // <li>Phone: ${phone}</li>
    let transporter = nodemailer.createTransport({
        // host: '',
        // port: 587,
        // secure: false,
        service: "gmail",
        auth: {
            user: "arglebargletamil@gmail.com",
            pass: `pRASANNA13087280$#`,
        },
        // tls: {
        //     rejectUnauthorized: false
        // }
    });

    let mailOptions = {
        from: "<arglebargletamil@gmail.com>",
        to: "arglebargletamil@gmail.com",
        subject: "Customer Contact Request",
        text: "Hello world?",
        html: output,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.render("./contact", {msg: "Email has been sent"});
    });
});

module.exports = router;
