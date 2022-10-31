const router = require("express").Router();
const Products = require("../models/Products");
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
    const {fullname, email, message} = req.body;

    const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>  
            <li>Name: ${fullname}</li>
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
            pass: `rkzlmxvnoyxryyta`,
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
        try {
            // res.render("./contact");
            res.redirect("/");
            console.log("Email has been sent");
        } catch (error) {
            console.log(error);
        }
    });
});

module.exports = router;
