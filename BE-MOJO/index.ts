import express, { Express } from "express";
import dotenv from "dotenv"
import connectDb from "./DB/connect";
import userRouter from "./src/Router/user.router";
import cors from  "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app:Express = express();
const port = process.env.PORT || 4001;

// Configure CORS first
app.use(cors({
  origin: 'https://localhost:5173', 
  credentials: true
}));

// Configure body parsing middleware with limits and error handling
app.use(express.json())
app.use(cookieParser());

app.use("/api/user", userRouter);

app.get("/api/auth/insta", async(req:any, res)=> {
  console.log(req);
  return;
})

app.get("/", async(req: any, res: any ) => {
  await  res.json({"message": "The Server is working"});
  return;
});

app.listen(port, async()=> {
  try {
  // await connectDb();
  console.log(`http://localhost:${port}`);
  } catch(e) {
    console.log("not connected to DB");
  }
});




