import dotenv from 'dotenv';
import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'

dotenv.config();

// console.log("MongoDB Connection String:", process.env.MONGODB_URI);



const app = express();

app.use(express.json());

app.listen(3000, () => {
 console.log("Server is running on port 3000");

 mongoose
.connect(process.env.MONGODB_URI , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true
})
.then( () => {
 console.log("Connected to MongoDB !!!");
})
.catch((err) => {
 console.log(err)
})

});



app.use('/api/user' , userRouter);
app.use('/api/auth' , authRouter);

app.use((err, req, res, next) => {
 const statusCode = err.status || 500;
 const message = err.message || "Internal Server Error";
 return res.status(statusCode).json({
  success: false,
  statusCode,
  message
 })
}) 
