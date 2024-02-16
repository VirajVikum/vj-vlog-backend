const express = require('express');
const app = express();
const cors = require('cors');
const controller= require('./controller')

app.use(cors()); //middleware to use when request and responces

app.use( //middleware that decrypt data that sent from html pages(send data as decrypted)
    express.urlencoded({
        extended:true,
    })
)

app.use(express.json()); //middleware to request/response data by json format




//rest apis

app.get('/users',(req,res)=>{
    controller.getUsers(req,res,next =>{
        res.send();
    });
});


app.post('/createuser',(req,res)=>{
    controller.addUsers(req.body,(callback)=>{
        res.send();
    });
});


app.post('/updateuser',(req,res)=>{
    controller.updateUser(req.body,(callback)=>{
        res.send(callback);
    });
});



app.post('/deleteuser',(req,res)=>{
    controller.deleteUser(req.body,(callback)=>{
        res.send(callback);
    });
});

module.exports=app;