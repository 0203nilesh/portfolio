import mongoose from "mongoose";

const experienceSchema= new mongoose.Schema({
    job: String,
    company: String,
    timePeriod: String,
    description: String,
})

const experiecenModel= mongoose.model("Experience", experienceSchema);
export default experiecenModel;