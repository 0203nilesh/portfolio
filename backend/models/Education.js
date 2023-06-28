import mongoose from "mongoose";

const educationSchema=new mongoose.Schema({
    course: String,
    year: String,
    description: String,
    institute: String,
    marks: String,
})

const educationModel= mongoose.model( "Education" ,educationSchema);
export default educationModel; 