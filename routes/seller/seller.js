const router = require("express").Router();
const Products = require("../../models/Products");
const SellerUser = require("../../models/SellerUser");
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

router.post("/:id", async (req, res) => {
    const {id, username, password, email} = req.body;

    const output = `
        <p>You have a new Message</p>
            Hello ${username}, 
            <p>Your new username is ${username}</p>
            <p>And your password is ${password}</p>
            <p>for the seller account in CLAZZZY</p>
            <a href="http://localhost:3000/sellers/login">Click here to login to your seller account</a>
            `;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "arglebargletamil@gmail.com",
            pass: `rkzlmxvnoyxryyta`,
        },
    });

    let mailOptions = {
        from: "<arglebargletamil@gmail.com>",
        to: email,
        subject: "Customer Contact Request",
        text: "Hello world?",
        html: output,
    };

    try {
        const iduser = await SellerUser.find({userid: id});
        console.log(iduser);
        if (iduser.length > 0) {
            console.log("Email already sent to your registered mail ID");
            res.json("Email already sent to your registered mail ID");
        } else {
            transporter.sendMail(mailOptions, async (error, info) => {
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
                res.json("Email has been sent");
            });
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
