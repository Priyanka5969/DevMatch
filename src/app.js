console.log("Starting a new project");

const express = require('express');
const app = express();

// this will take any api and give same res only even if we have other like /test .... 
//_______________________
// app.use((req,res)=>{
//     res.send("hey started");
// });  

// app.use('/',(req,res)=>{
//     res.send("hey started");
// });  
// _________________________

//will match all http methods post ,get
app.use('/test',(req,res)=>{
    res.send("tested");
});

// app.use('/hello',(req,res)=>{
//     res.send("two");
// });

app.get('/user',(req,res)=>{
    //res.send("user data");
    res.send({"name" : "priyanka", "age": 23});
});

// ? means b is optional , can search /ac
// * means allow in betwne anything
// + means many more that number allowed

app.get("/ab?c",(req,res)=>{
    //res.send("user data");
    res.send({"name" : "priyanka", "age": 23});
});

// /userdata/707
// /userdata/102
app.get('/userdata/:userId/:age',(req,res)=>{
    res.send(req.params);
});


// userquery?userId=707&password=abc
app.get('/userquery',(req,res)=>{
    res.send(req.query);
});

app.post('/user',(req,res)=>{
    res.send("posting user data");
    //res.send({"name" : "priyanka", "age": 23});
});

app.delete('/user',(req,res)=>{
    res.send("deleting user data");
    //res.send({"name" : "priyanka", "age": 23});
});

app.put('/user',(req,res)=>{
    res.send("using put for user data");
    //res.send({"name" : "priyanka", "age": 23});
});
// app.use('//hello',(req,res)=>{
//     res.send("two");
// }); ///brobr yet 

// even if /hello/2 la two print hoil
// app.use('/hello/2',(req,res)=>{
//     res.send("hey");
// });


app.listen(7777, ()=>{
    console.log("started server");
})