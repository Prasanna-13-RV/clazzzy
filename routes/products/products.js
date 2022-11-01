const router = require("express").Router();
const Products = require("../../models/Products");
const allProducts = require("../../config/products.json");

router.get("/product", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        let sort = req.query.sort || "rating";
        let categories = req.query.categories || "All";

        const categoriesOptions = [
            "Clothing",
            "Fruits",
            "Vegetables",
            "Screws",
            "Shirts",
        ];

        categories === "All"
            ? (categories = [...categoriesOptions])
            : (categories = req.query.categories.split(","));
        req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

        let sortBy = {};
        if (sort[1]) {
            sortBy[sort[0]] = sort[1];
        } else {
            sortBy[sort[0]] = "asc";
        }

        const products = await Products.find({
            name: {$regex: search, $options: "i"},
        })
            .where("categories")
            .sort(sortBy)
            .in([...categories])
            .skip(page * limit)
            .limit(limit);

        const total = await Products.countDocuments({
            categories: {$in: [...categories]},
            name: {$regex: search, $options: "i"},
        });

        const response = {
            error: false,
            total,
            page: page + 1,
            limit,
            categories: categoriesOptions,
            products,
        };

        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: true, message: "Internal Server Error"});
    }
});

// const insertProducts = async() => {
//     try {
//         const docs = await Products.insertMany(allProducts);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err);
//     }
// };
// insertProducts()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err));

// const hello = async () => {
//     const print = Products.find({categories: [...categories]});
//     console.log(print);
// };

// hello();

module.exports = router;
