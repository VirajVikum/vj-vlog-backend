const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');


const mongoose = require('mongoose');

const port =3001;
const host ='localhost'; // 'http://localhost' also correct

app.use(cors());
app.use(express.json());

const uri ="mongodb+srv://root:mongodbpassword@cluster0.xbeajqc.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log("Connected successfully...");
    }
    catch(error){
        console.log("Not Connected",error);
    }
};

connect();

const server= app.listen(port,host,()=>{     
    console.log(`node server listning to ${server.address().port}`)
}
); 


app.use('/api',router);