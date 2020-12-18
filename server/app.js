import express from 'express';
import data from './data.js';

// const express = require('express')

const app = express()
app.use(express.json())

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hi!')
})

app.get('/api/products', (req, res) => {
  res.send(data.products);
})

app.listen(port, () => console.log(`Server ready at http://localhost:${port}`));

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})