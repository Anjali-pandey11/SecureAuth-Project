import express from 'express'
import dotenv from 'dotenv';
import colors from 'colors'
import connectDB from './configs/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/authRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',router)


app.get("/",(req,res)=>{
  res.send("Hello Auth Project")
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log(`server is running on port ${PORT}`.bgCyan.white)
})

