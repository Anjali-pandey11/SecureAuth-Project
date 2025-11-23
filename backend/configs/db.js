import mongoose from 'mongoose';
import colors from 'colors'

const connectDB = async ()=>{
  try{
   const connection = await mongoose.connect(process.env.MONGO_DB_URI);
   console.log(`MongoDB is Connected`.bgMagenta.white)
  }catch(error){
    console.log(error)
  }
}

export default connectDB;