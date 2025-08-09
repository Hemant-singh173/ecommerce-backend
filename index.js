const express = require("express");
const dbConnect = require('./config/dbConnect');
const app = express();
const productRoute = require('./routes/productRoutes');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = 3000;
dbConnect();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use('/api/product', productRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
