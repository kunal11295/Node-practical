import mongoose from "mongoose";
import { Schema } from "mongoose";

const product = new Schema
({
    name:String,
    price:Number,
    category:String,
    description:String,
    image:String
})

export default mongoose.model("Products",product)