console.log("Starting a new project");

const express = require('express');
const app = express();

// this will take any api and give same res only even if we have other like /test .... 
//_______________________
// app.use((req,res)=>{
//     res.send("hey started");
// });  
// _________________________


app.use('/test',(req,res)=>{
    res.send("tested");
});

app.listen(7777, ()=>{
    console.log("started server");
})