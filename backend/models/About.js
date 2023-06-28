import mongoose from "mongoose";

const aboutSchema= new mongoose.Schema({
    post: String,
    description: String,
    image: String,
})

const aboutModel= new mongoose.model("About", aboutSchema);
export default aboutModel;