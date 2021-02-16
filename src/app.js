const express = require('express');
require('./db/conn');
const User = require('./models/user');


const app = express();
app.use(express.json());

console.log('App Installed...');
app.get('/',(req,res)=>{
    const users =  User.find();
    console.log(users)
    console.log('Get called');
    res.send('Hello world');
});

app.get('/api/user',async(req,res)=>{
    try {
        const users =  await User.find();
        res.send(users);
    } catch (e) {
        res.status(400).send(e);
    }
   
});

app.get('/api/user/:id',async(req,res)=>{
    try {
        const users =  await User.findById(req.params.id);
        if(!users){
            return  res.status(500).send('User Not Found');
        } else  res.send(users);
    } catch (e) {
        return  res.status(400).send(e);
    }
   
});

// app.post('/api/createUser',(req,res)=>{
//     console.log(req.body);
//     const user = new User(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
// });

app.post('/api/createUser',async(req,res)=>{
    try {
        const user = new User(req.body);
        const createUser = await user.save();
        return res.status(201).send(createUser);
    } catch (e){
        return  res.status(400).send(e);
    }
});


app.patch('/api/user/:id',async(req,res)=>{
    try {
        const users =  await User.findByIdAndUpdate(req.params.id,req.body,{
            new : true
        });
        if(!users){
            return   res.status(404).send('User Not Found');
        } else  {
            return res.send(users);
        }
    } catch (e) {
        return res.status(400).send(e);
    }
   
});
app.delete('/api/user/:id',async(req,res)=>{
    try {
        const users =  await User.findByIdAndDelete(req.params.id);
        if(!users){
            return   res.status(404).send('User Not Found');
        } else  {
            return res.send(users);
        }
    } catch (e) {
        return res.status(400).send(e);
    }
   
});

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('Listning on port 5000...')
});
