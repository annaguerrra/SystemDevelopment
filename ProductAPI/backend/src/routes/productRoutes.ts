import { Router } from "express";
import express from "express"
import ProductController from "../controllers/ProductController.js";
import { validateObjectId } from "../middleware/AuthController.js";

const router: Router = express.Router()

router
    .post('/products',       ProductController.create)
    .get('/products',        ProductController.findAll)
    .get('/products/:id',     ProductController.findById)
    .put('/products', validateObjectId, ProductController.update)
    .delete('/products/:id', ProductController.remove)

export default router