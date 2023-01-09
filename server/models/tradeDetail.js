import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId: Number,
    coinId: String,
    cost: Number,
    coinPrice: Number,
    coinQuan: Number,
    tradedAt: {
        type: Date,
        default: new Date()
    }
});

const TradeDetail = mongoose.model('TradeDetail', postSchema);

export default TradeDetail;