import mongoose from "mongoose";
import TradeDetail from "../models/TradeDetail.js";

export const getTradeDetail = async (req, res) => {
    try {
        const tradeDetail = await TradeDetail.find();

        //console.log('postmessage: ',postMessage);

        res.status(200).json(tradeDetail);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTradeDetail = async (req, res) => {
    const { userId, coinId, cost, coinPrice, coinQuan } = req.body;

    const newTrade = new TradeDetail({ userId, coinId, cost, coinPrice, coinQuan });

    try {
        await newTrade.save();

        res.status(201).json(newTrade);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateTradeDetail = async (req, res) => {
    const { id: _id } = req.params;
    const tradeDetail = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

     //const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    const updatedTradeDetail = await TradeDetail.findByIdAndUpdate(_id, {...tradeDetail, _id}, { new: true });

    res.json(updatedTradeDetail);
}

export const deleteTradeDetail = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await TradeDetail.findByIdAndRemove(id);

    res.json({message: 'Trade deleted successfully'});

}

// export const likePost = async (req, res) => {
//     const { id } = req.params;

//     if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

//     const post = await TradeDetail.findById(id);
//     const updatedPost = await TradeDetail.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, { new: true });

//     res.json(updatedPost);

// }