const mongoose = require("mongoose");

const womensProductSchema = new mongoose.Schema({
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
        type: String,
        required: true,
    }],
});

module.exports = mongoose.model("WomensProduct", womensProductSchema);
