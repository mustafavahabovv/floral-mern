import express from "express";
import { getAllProducts, deleteProduct, postProduct } from "../controller/ProductController.js";

const router = express.Router();

router 
.get("/", getAllProducts)
.post("/", postProduct)
.delete("/:id", deleteProduct)

export default router