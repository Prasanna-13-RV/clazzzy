const router = require("express").Router();
const Products = require("../models/Products");
const nodemailer = require("nodemailer");

router.post("/:id", (req, res) => {
    const id = req.params.id;

    const {username, password, email} = req.body;

    console.log(req.body, id);

    const output = `
        <p>You have a new Message</p>
            Hello ${username}, 
            <p>Your new username is ${username}</p>
            <p>And your password is ${password}</p>
            <p>for the seller account in CLAZZZY</p>
            `;

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
        to: email,
        subject: "Customer Contact Request",
        text: "Hello world?",
        html: output,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        const users = new SellerUser({
            id: id,
            username: username,
            email: email,
            password: password,
        });

        try {
            users.save((err, user) => {
                if (err) {
                    console.log(err);
                    res.status(500).send(err);
                } else {
                    res.status(200).send(output);
                }
            });
            res.redirect("/products");
            console.log("Email has been sent");
        } catch (error) {
            console.log(error);
        }
    });
});

router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
});

module.exports = router;
