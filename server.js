import dotenv from 'dotenv';
import express from 'express';
import foodRouter from './routers/foods.js';
import userRouter from './routers/users.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/api', orderRouter);
app.use('/api', userRouter);
app.use('/api', foodRouter);
app.listen(PORT, () => {
    console.log(`Server ${PORT}-portda ishga tushdi...`);
});
// http://localhost:3000/api/clients
import orderRouter from './routers/orders.js';
app.use('/api', orderRouter);