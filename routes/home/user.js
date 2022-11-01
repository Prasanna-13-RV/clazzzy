const router = require("express").Router();
const Users = require("../../models/Users");

router.post("/register", async (req, res) => {
    const {fullName, email, type} = req.body;

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

    try {
        await user.save();
        res.send("User Added");
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
                console.log(response);
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
        });
    } catch (error) {
        console.log(error);
    }
});

router.put("/updateprofile/:id", async (req, res) => {
    const id = req.params.id;

    const {firstName, secondName, dob, email, gender, phone} = req.body;

    try {
        const updateUser = Users.findByIdAndUpdate(id, {
            firstName: firstName,
            secondName: secondName,
            dob: dob,
            email: email,
            gender: gender,
            phone: phone,
        });
        await updateUser.save();
    } catch (error) {
        console.log(error);
    }
});

// const storage = multer.diskStorage({
//     destination: (req, res, cb) => {
//         cb(null, `Images/${req.body.name}`);
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     },
// });

// const upload = multer({
//     storage: storage,
// });

// router.post(
//     "/admin/createproducts",
//     upload.single("image"),
//     async (req, res) => {
//         const name = req.body.name;
//         const price = req.body.price;
//         // const image = req.body.image;
//         const category = req.body.category;
//         const description = req.body.description;
//         const rating = req.body.rating;

//         // console.log(req.file);

//         const product = new Products({
//             name: name,
//             pricing: price,
//             img: req.file.originalname,
//             // {
//             //     data: fs.readFileSync("Images/", req.body.image),
//             //     // contentType: "image/png",
//             // },
//             rating: rating,
//             categories: [...category],
//             description: description,
//         });

//         try {
//             await product.save();
//             res.send("Product Added");
//         } catch (error) {
//             console.log(error);
//         }
//     }
// );

// router.get("/admin/readproducts", (req, res) => {
//     const readProducts = Products.find({}, (err, result) => {
//         try {
//             res.send(result);
//         } catch (error) {
//             console.log(error);
//         }
//     });
// });

// router.get("/admin/updateproducts/:id", async (req, res) => {
//     const id = req.params.id;
//     try {
//         await Products.findById(id, (err, response) => {
//             res.json(response);
//             // console.log(response);
//         });
//     } catch (err) {
//         console.log(err);
//     }
// });

// router.put("/admin/updateproducts/:id", async (req, res) => {
//     const name = req.body.name;
//     const price = req.body.price;
//     const image = req.body.image;
//     const category = req.body.category;
//     const description = req.body.description;
//     const rating = req.body.rating;
//     const id = req.params.id;

//     try {
//         await Products.findById(id, (err, updatedProduct) => {
//             updatedProduct.name = name;
//             updatedProduct.pricing = price;
//             updatedProduct.img = image;
//             updatedProduct.rating = rating;
//             updatedProduct.categories = category;
//             updatedProduct.description = description;
//             updatedProduct.save();
//             res.send("Updated");
//         });
//     } catch (err) {
//         console.log(err);
//     }
// });

// router.delete("/admin/deleteproducts/:id", async (req, res) => {
//     const id = req.params.id;
//     // console.log(id);
//     await Products.findByIdAndRemove(id).exec();
//     res.send("Deleted");
// });

// router.get("/admin/viewproducts/:id", async (req, res) => {
//     const id = req.params.id;

//     try {
//         await Products.findById(id, (err, response) => {
//             res.json(response);
//         });
//     } catch (err) {
//         console.log(err);
//     }
// });

module.exports = router;
