const router = require("express").Router();
const Products = require("../models/Products");
const SellerUser = require("../models/SellerUser");
const nodemailer = require("nodemailer");

router.post("/login", async (req, res) => {
    const {username, password} = req.body;

    try {
        const loginUser = await SellerUser.find({
            username: username,
            password: password,
        });
        if (loginUser) {
            res.json(loginUser);
        } else {
            res.status(401).send({
                message: "Incorrect username or password",
            });
        }
    } catch (error) {
        console.log(error);
    }
});

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

    transporter.sendMail(mailOptions, async (error, info) => {
        try {
            const iduser = await SellerUser.find({userid: id});
            if (!iduser) {
                const users = new SellerUser({
                    userid: id,
                    username: username,
                    email: email,
                    password: password,
                });
                users.save((err, response) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.status(200).json(response);
                    }
                });
                console.log("Email has been sent");
            } else {
                console.log("User Already Exist");
            }
        } catch (error) {
            console.log(error);
        }
    });
});

module.exports = router;
