
const express = require('express');
const port = 3000;
const cors = require('cors');

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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

