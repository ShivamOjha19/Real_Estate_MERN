import dotenv from 'dotenv';

import express from 'express'
import mongoose from 'mongoose'

dotenv.config();

console.log("MongoDB Connection String:", process.env.MONGODB_URI);

mongoose
.connect(process.env.MONGODB_URI)
.then( () => {
 console.log("Connected to MongoDB");
})
.catch((err) => {
 console.log(err)
})


const app = express();

app.listen(3000, () => {
 console.log("Server is running on port 3000");
});