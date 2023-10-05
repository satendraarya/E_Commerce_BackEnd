const WomensProduct = require("../model/womensProducts"); 

const createWomensProducts = async (req, res) => {
    const { name, description, images, category } = req.body;
    const price = parseFloat(req.body.price);

    const womensProduct = new WomensProduct({
        name,
        description,
        price,
        images,
        category,
    });

    try {
        await womensProduct.save();
        res.status(201).json({ message: "Women's Product created successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getWomensProducts = async (req, res) => {
    try {
        const products = await WomensProduct.find({});
        if (!products) {
            res.send("No Products Found");
        } else {
            res.send(products);
        }
    } catch (error) {
        console.log('get error', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


module.exports = {
    createWomensProducts,
    getWomensProducts
}