import express from "express";
import { Login, Registration } from "../Controller/UserController.js";
import { addproduct, deleteProduct, getallproduct } from "../Controller/ProductController.js";
import { middleware } from "../Middleware/authmiddleware.js";

var router = express.Router();

router.post('/Registration',Registration)
router.post('/Login',Login);
router.post('/addproduct',addproduct)
router.get('/getallproduct',getallproduct)
router.post('/deleteProduct',deleteProduct)

export default router;