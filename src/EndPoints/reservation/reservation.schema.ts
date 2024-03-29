import mongoose from "mongoose";

export let ReservationSchema = new mongoose.Schema({
    _id:Number,
    userId:Number,
    checkInDate:Date,
    checkOutDate:Date,
    roomId:Number,
    roomsNo:Number,
    roomPrice:Number,
    totalPrice:Number,
    branchName:String
})