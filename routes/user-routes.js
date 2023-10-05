// Backend/routes/user-routes.js
const express = require("express");
const {
    signup,
    login,
    verifyToken,
    getUser,
    refreshToken,
    logout,
} = require("../controllers/user-controllers");

// Import the new controller
const {
    createMensFashionProduct,
    getMensFashionProducts,
    
} = require("../controllers/mensFashionProduct-controllers");

const { createWomensProducts, getWomensProducts } = require("../controllers/womensProducts-controllers");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", verifyToken, getUser);
router.get("/refresh", refreshToken, verifyToken, getUser);
router.post("/logout", verifyToken, logout);

// Add routes for Men's Fashion Products

router.post("/mens-fashion-products", createMensFashionProduct);
router.get("/mens-fashion-products", getMensFashionProducts);

// Add routes for womensProducts 

router.post("/womens-products", createWomensProducts);
router.get("/womens-products", getWomensProducts);



module.exports = router;

