require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();

const dbConnect = require("./dbConnect");

const productsRoutes = require("./routes/products");
const crudRoutes = require("./routes/crud");
const singleproduct = require("./routes/singleproduct");
const addtocart = require("./routes/addtocart");
const razorpay = require("./routes/razorpay");
const recommend = require("./routes/recommend");
const contactus = require("./routes/contactus");

dbConnect();
app.use(express.json());
app.use(cors());

app.use("/api", productsRoutes);
app.use("/", crudRoutes);
app.use("/", singleproduct);
app.use("/", addtocart);
app.use("/", recommend);
app.use("/", contactus);
app.use("/api/payment", razorpay);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running in ${process.env.PORT}`);
});
