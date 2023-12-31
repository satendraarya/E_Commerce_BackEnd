// Backend/model/MensFashionProduct.js
const mongoose = require("mongoose");

const mensFashionProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    images: [{
        type: String,
        
    }],
    category: [{
        type : String,
        required: true,
    }],
});

module.exports = mongoose.model("MensFashionProduct", mensFashionProductSchema);
