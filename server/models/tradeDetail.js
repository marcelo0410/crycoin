import mongoose from "mongoose";
import {uuid} from 'uuidv4'

const tradeSchema = mongoose.Schema({
    tradeId: {
        type: String,
        default: () => uuid()
    },
    userId: Number,
    coinId: String,
    cost: Number,
    coinPrice: Number,
    coinQuan: Number,
    tradedAt: {
        type: Date,
        default: Date.now
    }
});

const TradeDetail = mongoose.model('TradeDetail', tradeSchema);

export default TradeDetail;