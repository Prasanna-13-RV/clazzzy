const router = require("express").Router();
const Products = require("../../models/Products");

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

router.post("/countvalue", async (req, res) => {
    const ids = Object.values(req.body.id);

    try {
        ids.forEach(async (e) => {
            // const idProducts = Products.find({_id: e});
            // if (idProducts) {
                await Products.findById(e, (err, update) => {
                    update.count = count + 1;
                    update.save();
                });
            // }
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
