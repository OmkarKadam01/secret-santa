const mongoose = require('mongoose');


//mongoose.connect('mongodb://localhost:27017/users-db',{
//     mongoose.connect('mongodb+srv://user:Omkar@123@cluster0.gmwag.mongodb.net/user-db?retryWrites=true&w=majority',{
//     useCreateIndex : true,
//     useNewUrlParser : true,
//     useUnifiedTopology : true,
//     useFindAndModify : false
// }).then(()=>{
//     console.log('connection established for mongo db');
// }).catch((e)=>{
//     console.log(e);
// })

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:Omkar@123@cluster0.gmwag.mongodb.net/user-db?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("user-db").collection("users");
  console.log(collection);
  console.log(err);
  client.close();
});