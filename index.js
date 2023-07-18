import morgan from "morgan";
import mongoose from "mongoose";
import express from "express";
import router from "./Routes/userRoute.js";


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1',router);


mongoose.connect('mongodb+srv://kunal11295:kunal11295@cluster0.tnxk0aj.mongodb.net/awdizdb?retryWrites=true&w=majority')
.then(()=> console.log("Db connected"))
.catch((err) => console.log('db err =>(err)'));

app.listen(3001,()=>console.log("Working on port 3001"));