const mongoose = require('mongoose');

// returns promise hence using in async await so using then catch can handle errors
// mongoose.connect('mongodb://localhost:27017/devmatch')

const connectDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/devmatch');
}

module.exports = {connectDb};


// not calling here connectdb as or else it called after server has started so sometimes get issue
// ___________________________________________________________
// connectDb()
// .then(() => {
//     console.log("Database connected successfully");
// })
// .catch(err => {
//     console.log("Dtabse cannot be connected");
// })