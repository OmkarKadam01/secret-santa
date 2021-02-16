const mongoose = require('mongoose');


//mongoose.connect('mongodb://localhost:27017/users-db',{
    mongoose.connect('mongodb+srv://user:Omkar@123@cluster0.gmwag.mongodb.net/user-db?retryWrites=true&w=majority',{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : false
}).then(()=>{
    console.log('connection established for mongo db');
}).catch(()=>{
    console.log('No connections');
})
