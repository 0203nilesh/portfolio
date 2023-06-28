import mongoose from "mongoose";

const  contactSchema= new mongoose.Schema({
    email: String,
    website: String,
    github : String,
    phone: String,
})

const contactModel= mongoose.model("Contact", contactSchema);
export default contactModel;