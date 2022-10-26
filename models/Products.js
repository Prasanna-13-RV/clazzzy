const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    categories: {
        type: [String],
        required: true,
    },
    pricing: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    count: {
        type: Number,
        required: true,
        default: "",
    },
});

module.exports = mongoose.model("products", productSchema);
