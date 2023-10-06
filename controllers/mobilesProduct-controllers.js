const MobilesProduct = require("../model/MobilesProduct");

const createMobilesProduct = async (req, res) => {
    const { name, images, colour, brand, modelName, operatingSystem, cellularTechnology, about} = req.body;
    const price = parseFloat(req.body.price);

    const mobilesProduct = new MobilesProduct({
        name,
        images,
        colour,
        brand,
        modelName,
        operatingSystem,
        cellularTechnology,
        about,
        price,
    });

    try {
        await mobilesProduct.save();
        res.status(201).json({ message: "Mobile Product created Successfully"});
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getMobilesProduct = async (req, res ) => {
    const {brand} = req.query;

    try {
        let products;

        if(brand) {
            
            products = await MobilesProduct.find({ brand });
        }else {
            products = await MobilesProduct.find();
        }
        res.status(201).json({products})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    createMobilesProduct,
    getMobilesProduct,
};