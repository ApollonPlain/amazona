import express from 'express';
import mongoose from 'mongoose';
import userRouter from './api-routes/userRouter.js';
import data from './data.js';


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

app.get('/api/products', (req, res) => {
	res.send(data.products);
})

app.get('/api/products/:id', (req, res) => {
	const product = data.products.find((x) => x._id === req.params.id);
	if (product) {
		res.send(product);
	} else {
		res.status(404).send({ message: 'Product not Found' });
	}
})


app.use('/api/users', userRouter);


app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server ready at http://localhost:${port}`));
