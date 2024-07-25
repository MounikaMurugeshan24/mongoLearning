const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
app.use(express.json());


mongoose.connect('mongodb+srv://mounimurugeshan123:blAxTzNzDh1cQhu1@mongolearn.0nzdedt.mongodb.net/mongoLearn?retryWrites=true&w=majority&appName=Mongolearn')
  .then(() => {
    console.log('Connected!')
    app.listen(3000, ()=> {
        console.log('Server is running on port 3000');
    })
})
  .catch((err)=>{
    console.log(err)
})




app.get('/', async (req, res)=> {
    const product = await Product.find();
    res.status(500).json(product);
})





app.post('/api/products',async (req,res)=>{

  try{
    const product = await Product.create(req.body);
    res.status(200).json(product);

  }catch(error){
    res.status(500).json({message: error.message})
  }

    console.log(req.body);
    // res.send("Data received");
})

