
var cors = require('cors')
const express=require('express');
const { connection } = require('mongoose');
const mongoClient =require('mongodb').MongoClient
const app=express()
app.use(express.json())
var database;
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Welcome to mongodb API')
})

app.get('/Ingredients',(req,res)=>{
    database.collection('Ingredients').find({}).toArray((err,result)=>{

        if(err) throw err;
        res.send(result)
    })
})

app.get('/Pizzas',(req,res)=>{
    database.collection('Pizzas').find({}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.listen(7000,()=>{
    mongoClient.connect('mongodb://127.0.0.1:27017',{useNewUrlParser:true},(error,result)=>{
        if(error) throw error;

        database=result.db('PizzaServer')
        console.log("Connection Successful")
    })
})
