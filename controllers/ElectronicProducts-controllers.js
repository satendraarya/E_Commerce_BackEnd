const ElectronicProducts = require("../model/ElectronicProducts");

const createElectronicProducts = async (req, res) => {
    const { name, images, description, color, modelName, displaySize, screenType, hdTechnology } = req.body;
    const price = parseFloat(req.body.price);

    const electronicProducts = new ElectronicProducts ({
        name, 
        images,
        price,
        description, 
        color,
        modelName,
        displaySize,
        screenType ,
        hdTechnology,
    });

    try {
        await electronicProducts.save();
        res.status(201).json({ message: " Product created Successfully"});
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getElectronicProducts = async (req, res) => {
    const {name} = req.query;

    try {
        let products;
        if(name) {
            products = await ElectronicProducts.find({name})
        }else {
            products = await ElectronicProducts.find();
        }
        res.status(201).json({products})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }

};

module.exports = {
    createElectronicProducts,
    getElectronicProducts
};