
const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = 3000;

const productRouter = require('./routes/_product');

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:4200",
  ],
  credentials: true,
  exposedHeaders: ["set-cookie"],
};

app.use(cors(corsOptions));
app.use('/products',productRouter)


const apiProxy = createProxyMiddleware('/api', {
  target: 'http://localhost:3000',  // Update with the actual URL of your Express.js server
  changeOrigin: true,
});

// Use the proxy middleware for '/api' requests
app.use('/api', apiProxy);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

