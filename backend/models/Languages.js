import mongoose from "mongoose";

const  languagesSchema= new mongoose.Schema({
    language: String,
})

const languagesModel= mongoose.model("Language", languagesSchema);
export default languagesModel;