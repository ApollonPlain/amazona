import express from 'express';
import mongoose from 'mongoose';
import productRouter from './api-routes/productRouter.js';
import userRouter from './api-routes/userRouter.js';
import dotenv from 'dotenv';
import orderRouter from './api-routes/orderRouter.js';

dotenv.config();

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

console.log("------");
console.log(process.env.MONGODB_URL);
console.log("------");

mongoose.connect(process.env.MONGODB_URL, {
	// const res = mongoose.connect(process.env.MONGODB_URL || 'mongodb://mongodb:27017/amazona', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
}, function (err) { if (err) throw err; });



app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
	res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})
app.get('/', (req, res) => {
	res.send('Hello!')
})

app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server ready at http://localhost:${port}`));
