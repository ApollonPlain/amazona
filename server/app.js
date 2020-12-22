import express from 'express';
import mongoose from 'mongoose';
import productRouter from './api-routes/productRouter.js';
import userRouter from './api-routes/userRouter.js';

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

app.get('/', (req, res) => {
	res.send('Hi!')
})

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server ready at http://localhost:${port}`));
