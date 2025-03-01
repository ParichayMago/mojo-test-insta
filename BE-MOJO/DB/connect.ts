import mongoose, { mongo, Mongoose } from "mongoose";


const connectDb = async()=>{
  try {
    await mongoose.connect(process.env.DB_URL as string);
    console.log("db connected");
  } catch(e){
    console.log(e);
  }
}

export default connectDb;