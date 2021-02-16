const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/users-db',{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : false
}).then(()=>{
    console.log('connection established for mongo db');
}).catch(()=>{
    console.log('No connections');
})