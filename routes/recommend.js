const router = require("express").Router();
const {count} = require("../models/Products");
const Products = require("../models/Products");

router.get("/recommend", async (req, res) => {
    try {
        const recommendProducts = Products.find((err, result) => {
            try {
                res.send(result);
            } catch (error) {
                console.log(error);
            }
        }).sort({count: -1});
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
