const router = require("express").Router();
const Products = require("../models/Products");
const {ObjectId} = require("mongodb");
router.get("/admin/addtocart", async (req, res) => {
    // res.send("hello world")

    const products = await Products.find();
    res.json(products);
});

module.exports = router;
