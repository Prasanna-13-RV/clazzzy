const router = require("express").Router();
const Products = require("../models/Products");

router.get("/singleproduct/:id", async (req, res) => {
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

module.exports = router;
