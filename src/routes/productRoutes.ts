import { createProduct, getProduct, deleteProduct, getAllProduct } from "../controllers/productController";
import { Router } from "express";

const router = Router()

router.post('/products/', createProduct); //criar produto
router.get('/products/', getAllProduct); //listar todos os produtos
router.get('/products/:id', getProduct); //listar um produto
router.delete('/products/:id', deleteProduct); //deletar um produto

export default router;