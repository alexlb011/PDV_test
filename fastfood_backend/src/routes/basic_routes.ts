import express from "express";
import ProductController from "../controllers/ProductController";
import PaymentController from "../controllers/PaymentController";

const router = express.Router();

router.post("/pay", PaymentController.register);
router.get("/", ProductController.findAll);

// Exportar o objeto 'router' para ser usado em outros lugares do seu aplicativo
export default router;
