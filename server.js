require("dotenv").config();

const express = require("express");
const cors = require("cors");

const multer = require("multer");
const app = express();

const dbConnect = require("./dbConnect");

// products
const productsRoutes = require("./routes/products/products");
const singleproduct = require("./routes/products/singleproduct");
const addtocart = require("./routes/products/addToCart");
const razorpay = require("./routes/products/razorpay");
// seller
const crudRoutes = require("./routes/seller/crud");
const seller = require("./routes/seller/seller");
// home
const recommend = require("./routes/home/recommend");
const contactus = require("./routes/home/contactus");
const userRoute = require("./routes/home/user");

dbConnect();
app.use(express.json());
app.use(cors());

app.use(
    cors({
        origin: ["https://clazzzy.herokuapp.com/"],
        methods: ["GET", "POST", "DELETE"],
        credentials: true,
        origin: true,
    })
);

app.use("/api", productsRoutes);
app.use("/", crudRoutes);
app.use("/", singleproduct);
app.use("/", addtocart);
app.use("/", recommend);
app.use("/", contactus);
app.use("/", userRoute);
app.use("/api/payment", razorpay);

app.use("/seller", seller);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running in ${process.env.PORT}`);
});
