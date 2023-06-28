import languagesModel from "../models/Languages.js";

export const getLanguages= async(req, res)=>{
    try {
        const languages= await languagesModel.find();
        // console.log(languages);
        if(languages?.length!==0){
            res.status(200).json(languages);
        }else{
            res.status(200).json({message: "No Languages are present", type: "warning"});
        }
    } catch (error) {
        res.status(200).json({message: "Something Went Wrong!", type: "danger"});
    }
}