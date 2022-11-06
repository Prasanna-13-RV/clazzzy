const router = require("express").Router();
const Users = require("../../models/Users");

router.post("/register", async (req, res) => {
    const {fullName, email, type} = req.body;

    try {
        const userResponse = await Users.find({email: email});
        if (userResponse.length) {
            return res.json(userResponse);
        } else {
            const user = new Users({
                firstName: fullName,
                secondName: "Enter your Second Name",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
                email: email,
                dob: "Enter your Date of Birth",
                gender: "Enter your Gender",
                phone: 1234567890,
                typeOfRegister: type,
            });
            await user.save().then((response) => {
                res.json(response);
            });
        }
    } catch (error) {
        console.log(error);
    }
});

router.post("/login", async (req, res) => {
    const {email} = req.body;
    try {
        await Users.find({email: email}).then(async (response) => {
            try {
                res.json(response);
                // console.log(response);
            } catch (error) {
                console.log(error);
            }
        });
    } catch (error) {
        console.log(error);
    }
});

router.get("/profile/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const singleUser = Users.findById(id, (err, response) => {
            res.json(response);
            // console.log(response);
        });
    } catch (error) {
        console.log(error);
    }
});

router.put("/updateprofile/:id", async (req, res) => {
    const id = req.params.id;

    const {firstName, secondName, dob, img, email, gender, phone} = req.body;

    try {
        await Users.findById(id, (err, updatedUser) => {
            updatedUser.firstName = firstName;
            updatedUser.secondName = secondName;
            updatedUser.dob = dob;
            updatedUser.img = img;
            updatedUser.email = email;
            updatedUser.gender = gender;
            updatedUser.phone = phone;
            updatedUser.save();
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
