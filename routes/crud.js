const router = require("express").Router();
const Products = require("../models/Products");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, `Images/${req.body.name}`);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage: storage,
});

router.post(
    "/admin/createproducts",
    upload.single("image"),
    async (req, res) => {
        const name = req.body.name;
        const price = req.body.price;
        // const image = req.body.image;
        const category = req.body.category;
        const description = req.body.description;
        const rating = req.body.rating;

        // console.log(req.file);

        const product = new Products({
            name: name,
            pricing: price,
            img: req.file.originalname,
            // {
            //     data: fs.readFileSync("Images/", req.body.image),
            //     // contentType: "image/png",
            // },
            rating: rating,
            categories: [...category],
            description: description,
        });

        try {
            await product.save();
            res.send("Product Added");
        } catch (error) {
            console.log(error);
        }
    }
);



router.get("/admin/readproducts", (req, res) => {
    const readProducts = Products.find({}, (err, result) => {
        try {
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    });
});

router.get("/admin/updateproducts/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await Products.findById(id, (err, response) => {
            res.json(response);
            // console.log(response);
        });
    } catch (err) {
        console.log(err);
    }
});

router.put("/admin/updateproducts/:id", async (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const image = req.body.image;
    const category = req.body.category;
    const description = req.body.description;
    const rating = req.body.rating;
    const id = req.params.id;

    try {
        await Products.findById(id, (err, updatedProduct) => {
            updatedProduct.name = name;
            updatedProduct.pricing = price;
            updatedProduct.img = image;
            updatedProduct.rating = rating;
            updatedProduct.categories = category;
            updatedProduct.description = description;
            updatedProduct.save();
            res.send("Updated");
        });
    } catch (err) {
        console.log(err);
    }
});

router.delete("/admin/deleteproducts/:id", async (req, res) => {
    const id = req.params.id;
    // console.log(id);
    await Products.findByIdAndRemove(id).exec();
    res.send("Deleted");
});

router.get("/admin/viewproducts/:id", async (req, res) => {
    const id = req.params.id;

    try {
        await Products.findById(id, (err, response) => {
            res.json(response);
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
