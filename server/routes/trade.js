import express from "express";
import { getTradeDetail, createTradeDetail, updateTradeDetail, deleteTradeDetail } from "../controllers/trade.js";

const router = express.Router();

router.get('/', getTradeDetail);
router.post('/', createTradeDetail);
router.patch('/:id', updateTradeDetail);
router.delete('/:id', deleteTradeDetail);

export default router;