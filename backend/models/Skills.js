import mongoose from "mongoose";

const  skillSchema= new mongoose.Schema({
    skill: String,
    marks: Number,
})

const skillModel= mongoose.model("Skill", skillSchema);
export default skillModel;