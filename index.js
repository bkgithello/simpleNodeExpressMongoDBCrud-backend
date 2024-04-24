const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoutes = require("./routes/product.route");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//routes
app.use('/api/products', productRoutes);


// mongoDB connection
mongoose.connect('mongodb://localhost:27017/NodeExpressMongoDBCrud').
then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
        console.log('Server is runningon port 3000');
    });
}).catch(() => {
    console.log("Connection faild")
})

app.get('/', (req,res) =>{
    res.send("Hello from Node API server");
});

