const express = require('express');
// require('../config/database');
const {connectDb} = require('../config/database');
const app = express();
const User = require('../models/user');

// <-----------without express.json req.body undiefined yenar------------->
app.use(express.json());
// as postman or from req we are sending json data but server can not read json data , hence to read we need middleware  i.e express.json()
app.post('/signup', async (req,res) => {
    //console.log(req.body);
    const user = new User(req.body);
    try{
        await user.save();
        res.send("User data saved successfully");
    }catch(err){
        res.status(500).send("failed saving user data");
    }
})

connectDb()
.then(() => {
    console.log("Database connected successfully");

    // <<<<-------- here first connect to db and then server has started listening ---------->>>>
    app.listen(7777, ()=>{
        console.log("started server");
    })
})
.catch(err => {
    console.log("Databse cannot be connected");
})

// app.listen(7777, ()=>{
//     console.log("started server");
// })