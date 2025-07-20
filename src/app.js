console.log("Starting a new project");

const express = require('express');
const app = express();

const { adminauth, userAuth } =  require('../middlewares/auth');

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

//if next is previous then it will go to next route handler
//if next is after res.send .... then also it wil go to next and if in next route handler we again using res.send then give error as tcp connection lost cant set headers again

app.use('/test',(req,res,next)=>{
    console.log("firsttt");
    next();
   //res.send("tested");
   // next();
},
(req,res) => {
    res.send("tested 2");
}
);


//middleware using for auth
app.use('/admin' , adminauth);


// we should write this err middleware before or else it wont give first error
// ________________________________________________________
// app.use('/', (err, req,res,next) => {
//     if(err){
//         res.status(500).send("Wrong - getting err through middleware");
//     }
// })
// _________________________________________________________

app.get('/admin/getAdmindata',(req,res)=>{
    throw new Error('xyz');
    res.send("get user data");
    // try{
    //     throw new Error('xyz');
    // }catch(err){
    //     res.status(500).send(" getting err through try-catch");
    // }
});
app.get('/admin/adminProfile',(req,res)=>{
    res.send("get user data");
});
app.use('/', (err, req,res,next) => {
    if(err){
        res.status(500).send("Wrong - getting err through middleware");
    }
})


//if we have only one api the instead of app.use directly add in
app.get('/user', userAuth , (req,res) => {
    console.log("with auth calling route handler for user");
})

//---------------- if not sending response at end then get error can't /get
// app.use('/moreHandler',(req,res,next)=>{
//     console.log("moreHandler");
//     next();
//    //res.send("tested");
//    // next();
// },
// (req,res,next) => {
//     console.log("tested 2");
//     next();
// }

// );


// app.use('/hello',(req,res)=>{
//     res.send("two");
// });

// app.get('/user',(req,res)=>{
//     //res.send("user data");
//   //  res.send({"name" : "priyanka", "age": 23});
// });

// ? means b is optional , can search /ac
// * means allow in betwne anything
// + means many more that number allowed

// app.get("/ab?c",(req,res)=>{
//     //res.send("user data");
//     res.send({"name" : "priyanka", "age": 23});
// });

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