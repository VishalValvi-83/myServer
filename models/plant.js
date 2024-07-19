import { Schema, model } from "mongoose";

const plantSchema = new Schema({
    name: String,
    cateogory: String,
    image: String,
    price: Number,
    description: String
},{
    timestamps : true
})

const Plant = model('Plant', plantSchema)

export default Plant;