import express from 'express';

import env from 'dotenv';

import adminRoutes from './routes/adminRoutes.js';
import authRoutes from './routes/authRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import couponRoutes from './routes/couponRoutes.js';
import storeRoutes from './routes/storeRoutes.js';
import connectDB from "./config/db.js";

// Updated *************

import blogsRoutes from "./routes/blogsRoutes.js";
import itemsRoutes from "./routes/itemsRoutes.js";

// ***********

import cors from "cors";

env.config();

const app = express();

app.use(cors());
// const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.json()); // ✅ Required to parse JSON body
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/coupons', couponRoutes);
app.use('/api/stores', storeRoutes);


// Updated by me ****************

app.use('/api/blogs',blogsRoutes);
app.use('/api/items',itemsRoutes);

// ***********************

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

//Connect Server
connectDB().then(()=>{
  app.listen(process.env.PORT,()=>{
      console.log(`Server started on port ${process.env.PORT}`);
  })}
).catch(err=>console.log(err));

// app.listen(PORT);