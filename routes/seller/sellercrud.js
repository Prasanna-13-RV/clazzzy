const Products = require("../../models/Products");

const router = require("express").Router();

router.get("/seller/:id", (req, res) => {
    const id = req.params.id;

    try {
        const products = Products.find({sellerId: id}).then((response) => {
            res.json(response);
        });
        // console.log(products);
    } catch (error) {
        console.log(error);
    }
});

router.post("/seller/:id/createproducts", async (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const image = req.body.image;
    const category = req.body.category;
    const description = req.body.description;
    const rating = req.body.rating;
    const id = req.params.id;

    const product = new Products({
        name: name,
        pricing: price,
        img: image,
        rating: rating,
        categories: category.split(","),
        description: description,
        count: 0,
        sellerId: id,
    });

    try {
        await product.save();
        res.send("Product Added");
    } catch (error) {
        console.log(error);
    }
});

router.get("/seller/:id/viewproducts/:productid", async (req, res) => {
    const id = req.params.id;
    const productid = req.params.productid;

    try {
        await Products.find({sellerId: id, _id: productid}, (err, response) => {
            res.json(response);
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
