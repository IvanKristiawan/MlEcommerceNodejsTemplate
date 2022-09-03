import express from "express";
import {
    getStoks,
    getStokById,
    saveStok
} from "../controllers/StokController.js"

const router = express.Router();

router.get("/stoks", getStoks);
router.get("/stoks/:id", getStokById);
router.post("/stoks", saveStok);

export default router;