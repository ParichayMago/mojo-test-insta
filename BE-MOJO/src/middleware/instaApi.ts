import { Request, Response, NextFunction} from "express"
import { ICodeToTempAccessToken, ITempToPermAccessToken } from "../types/types";

const client_secret:string = process.env.client_secret || '9b5d141339e47f6bfbed329b3b9d7d48';

// TEMP ACCESS TOKEN
export const codeToTempToken = async (code: string): Promise<ICodeToTempAccessToken | undefined> => {
  try {
    const response = await fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', 
      },
      body: new URLSearchParams({
        client_id: '1169547817377137',
        client_secret: `${client_secret}`,
        grant_type: 'authorization_code',
        redirect_uri: 'https://localhost:5173/auth/token/',
        code: code,
      }).toString(),
    });

    if (!response.ok) {
      console.log(response.json);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ICodeToTempAccessToken = await response.json();
    return data;
  } catch (e) {
    console.log('Error Temp Access Token:', e);
    return undefined;
  }
};

// TO GET LONG-TERM ACCESS TOKEN
export const tempTokenToPermToken = async (accessToken:String):Promise<String | undefined >=> {
  try {
    const response = await fetch(`https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${client_secret}&access_token=${accessToken}`, {method:"GET"})
    
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data:ITempToPermAccessToken = await response.json();
    return data.access_token;
  } catch(e) {
    console.log("some Error getting perm Access Token", e);
    throw new Error(`Error Temp To Perm Access Token`);
  }
}


export const insta_basic = async (access_token: String): Promise<IUserBasic> => {
  try {
    const resp = await fetch(
      `https://graph.instagram.com/v22.0/me?fields=id,username,name,profile_picture_url,followers_count,follows_count,media_count&access_token=${access_token}`
    );

    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }

    const data: IUserBasic = await resp.json();
    return data;
  } catch (e) {
    console.log("Error fetching basic Instagram data:", e);
    throw e; 
  }
};

interface IUserBasic {
  id: string; 
  username: string;
  name: string;
  profile_picture_url: string;
  followers_count?: number; 
  follows_count?: number;   
  media_count?: number;     
}