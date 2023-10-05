
const MensFashionProduct = require("../model/MensFashionProduct");

const createMensFashionProduct = async (req, res) => {
    const { name, description, images, category } = req.body;
    const price = parseFloat(req.body.price);

    const mensFashionProduct = new MensFashionProduct({
        name,
        description,
        price,
        images,
        category,
    });

    try {
        await mensFashionProduct.save();
        res.status(201).json({ message: "Mens Fashion Product created successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getMensFashionProducts = async (req, res) => {
    const {category} = req.query;   // Get the category from the query parameter
    
    try {
        let products;

        if(category) {
            // If a category is specified, filter products by category
            products = await MensFashionProduct.find({ category });
        }else {
            products = await MensFashionProduct.find();
        }
        res.status(200).json({products})
        // const products = await MensFashionProduct.find();
        // res.status(200).json({ products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// Add more controller functions as needed (e.g., retrieve all products, retrieve a specific product, update, delete, etc.)

module.exports = {
    createMensFashionProduct,
    getMensFashionProducts
};
