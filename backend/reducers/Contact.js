import contactModel from '../models/Contact.js';

export const getContacts= async(req, res)=>{
    try {
        const contacts= await contactModel.find();
        if(contacts?.length!==0){
            res.status(200).json(contacts);
        }else{
            res.status(200).json({message: "No contacts are present", type: "warning"});
        }
    } catch (error) {
        res.status(200).json({message: "Something Went Wrong!", type: "danger"});
    }
}