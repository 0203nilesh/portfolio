import mongoose from "mongoose";

const projectSchema= new mongoose.Schema({
    name: String,
    description: String,
    images: [String],
})

const projectModel= new mongoose.model("Project", projectSchema);
export default projectModel;