
import express from "express";
import {userSignUp, userLogIn } from "../controller/user-controller.js";

import {
  getAllProducts,
  getProductById,
} from "../controller/product-controller.js";
import { addToCart, getCartItems ,deleteCartItem} from '../controller/cartController.js'; 

const router = express.Router();


router.post("/login", userLogIn);
router.post("/signup", userSignUp);

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);

router.post('/cart', addToCart); 
router.get('/cart', getCartItems); 
router.delete('/cart/:id', deleteCartItem);

export default router;
