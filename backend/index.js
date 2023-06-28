import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import allRoutes from './routes/index.js';
import cors from 'cors';

dotenv.config();
const PORT= process.env.PORT || 5000 ;
const app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, useNewUrlParser: true}))
app.use(express.json()); 
app.use(cors());   

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: false, useUnifiedTopology: true}).then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
}) 

app.get('/', (req, res)=>{ 
    res.status(200).json({message: "This is message for your name"});
})

app.use('/routes/', allRoutes);

app.listen(process.env.PORT, (err)=>{
    console.log("Server is listening on port 5000");
})