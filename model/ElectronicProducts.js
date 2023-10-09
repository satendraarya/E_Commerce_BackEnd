const mongoose = require('mongoose');

// const specificationSchema = new mongoose.Schema({
//     key: String,
//     value: String,
// });

const electronicProductsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please enter the product's name"]
    },
    images: [{
        type : String,
        required: [true, "Images is required"]
    }],
    price: {
        type: Number,
        required:[ true,"Price is Required"],
    },
    description: {
        type: String,
    },
    // specifications: [specificationSchema],

    // specifications
    color : {
        type: String,
    },
    modelName: {
        type: String,
    },
    displaySize: {
        type: String,
    },
    screenType : {
        type: String,
    },
    hdTechnology: {
        type: String,
    },
});

module.exports = mongoose.model('electronicProducts', electronicProductsSchema);