import mongoose from "mongoose";
import {Schema, model} from "mongoose";

const userSchema = new Schema({
    name : {
        type: String, 
        unique: true, 
        required: true
    }, 
    email : {
        type: String, 
        unique: true, 
        required: true
    }, 
    password : {
        type: String, 
        required: true
    }, 
}, {timestamps: true})
export default mongoose.models.User ||  model("User", userSchema); 