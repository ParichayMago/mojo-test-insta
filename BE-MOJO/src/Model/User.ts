import mongoose, {Schema, model} from "mongoose";

interface IUser {
  user_id: string,
  accesss_token: string,
}

const userSchema = new Schema<IUser>({
  user_id: {type:String, required:true},
  accesss_token: {type:String, required:true}
})

const User = model<IUser>('User', userSchema);

export default User;


