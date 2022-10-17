
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();


dotenv.config({path:'./config.env'});
require("./db/conn");

app.use(express.json());

// we link the router file to make our route
app.use(require("./router/auth")); 

const PORT = process.env.PORT;



// middelware//
const middelware=(req,res,next)=>{
    console.log(`hello middleware`);
    next();
}
// create pages in expess//
app.get('/',(req,res)=> {
    res.send(`hello home from the server`);
});

app.get('/about',(req,res)=> {
    res.send(`hello anout us from the server`);
});

app.get('/contact',(req,res)=> {
    res.send(`hello contact from the server`);
});
app.get('/services',(req,res)=> {
    res.send(`hello services from the server`);
});
//server created//
app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`)
});