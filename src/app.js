const express = require('express');
// require('../config/database');
const {connectDb} = require('../config/database');
const app = express();
const User = require('../models/user');

app.post('/signup', async (req,res) => {
    const userObj = {
        firstName: "Shivani",
        lastName: "Vishe",
        emailId: "qwe@gmail.com",
        password: "qwe123"
    }
    //to save this obj in our mongodb, so need to create instance of User model
    const user = new User(userObj);

    // or can add directly
    // const user = new User({
    //     firstName: "Priyanka",
    //     lastName: "Vishe",
    //     emailId: "xyz@gmail.com",
    //     password: "abc123"
    // })

    // <-------------all db operatiosn return promises hence wrap them inside async await ---------------->
    // await user.save();
    // res.send("User added successfully");

    //<---------------wrap all db operations await in try catch------------->
    try{
        await user.save();
        res.send("User added successfully");
    }catch(err){
        res.status(500).send("Error saving the user");
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