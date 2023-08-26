const express = require ('express');
const cors = require ('cors');

const products = require('./products')

const app = express();
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000', // Adjust this if your React server runs on a different port
  }));

app.get('/', (req, res) => {
    res.send('Welcome to our online shop API...')
})

app.get('/products', (req, res) => {
    res.send(products)
})

const port = process.env.PORT || 5000

app.listen(port, console.log(`Server running on your ${port}` ))

