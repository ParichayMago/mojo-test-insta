export interface ICreateUser {
  token:string
};

export interface ICodeToTempAccessToken {
  access_token: String,
  user_id: String,
  permissions: String
};

export interface ITempToPermAccessToken {
  access_token: String,
  token_type: String,
  expires_in: String
}


export interface IUser  {
  _id: any
  user_id: String,
  access_token:String
}