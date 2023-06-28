import mongoose from "mongoose";

const  hobbiesSchema= new mongoose.Schema({
    hobbie: String,
})

const hobbiesModel= mongoose.model("Hobbie", hobbiesSchema);
export default hobbiesModel;