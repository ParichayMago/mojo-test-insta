import { Request, Response } from "express";
import { codeToTempToken, insta_basic,  tempTokenToPermToken } from "../middleware/instaApi";


export const testing = async(
  req:Request,
  res: Response
) => {
  try {
    res.json({message:"Working"})

  } catch(e){
    res.json({"error":e})
  }
}

export const handleAuth = async (
  req: Request,
  res: Response
) => {
  try {

    console.log("Api hit")
    const body =  req.body;

    // checking for token 
    let permToken = req.cookies.token;
    let user_id;

    // if not Found Token get Token
    if(!permToken) {
      // Creating 
      const code = body.code;
      console.log("This is code:", code);
      let temp = await codeToTempToken(code);

      console.log("This is temp: ", temp);

      if(!temp){
        res.status(500).json({error: "api error"});
        return;
      }

      user_id = temp.user_id;

      // const existingUser:IUser | boolean = await findUser(`${temp.user_id}`);
      
      // inside if person to mongo
      permToken = await tempTokenToPermToken(temp.access_token);
      console.log("this is the permToken: ", permToken);
      // if(!existingUser) {
      //   if(!permToken) {
      //     throw new Error("api Error")
      //   }
      //   await createUser(temp.user_id, permToken);
      // } 
    }

    const user_basic = await insta_basic(permToken);

    console.log("this is user_baic ", user_basic);

    res.cookie("token", permToken, {maxAge:50000, httpOnly:true});
    res.json({success:true, user_basic});
    return;
  } catch(e){
    return console.log(e)
  }
}



export const userInfo = async(req:Request, res:Response)=> {
  try {
    const token = req.params.token;
    console.log("token ", token);
    const user_basic = await insta_basic(token);
    res.json({user_basic, success:true});
  } catch(e){
    res.json({error: e, success:false})
  }
}