import mongoose from "mongoose";
import User from "../Model/User";
import { ICreateUser, IUser } from "../types/types";

export const findUser=async(user_id:String):Promise<IUser |boolean>=>{
  try {
    const user:IUser|null = await User.findOne({user_id:user_id});
    if(!user) {
      return false;
    }
    return user;
  } catch(e){
    throw Error("Mongoose error");
  }
}

export const createUser = async(user_id:String, permAccessToken:String):Promise<boolean> => {
  try {
    const user = await User.create({user_id: user_id, accesss_token: permAccessToken});
    if(!user) {
      return false;
    } 
    return true;
  }catch(e) {
    console.log("Error: ", e);
    throw new Error("Mongo New User Erro");
  }
  
}