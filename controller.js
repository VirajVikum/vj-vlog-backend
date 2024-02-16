const { response } = require('./app');
const User = require('./model');

const getUsers=(req,res,next)=>{
    User.find()
        .then(response =>{ //javascript promises
            res.json({response})
        })
        .catch(error =>(
            res.json({error})
        ))
};

const addUsers = (req,res,next)=>{
    const user = new User({
        id:req.body.id,
        name:req.body.name
    });
    user.save()
        .then(response =>{ //javascript promises
            res.json({response})
        })
        .catch(error =>(
            res.json({error})
        ));
};

const updateUser = (req,res,next)=>{
    // const id =req.body.id;
    // const name =req.body.name;
    // object destructuring
    const {id,name} = req.body;
    User.updateOne({id:id},{$set:{name:name}})
        .then(response =>{ //javascript promises
            res.json({response})
        })
        .catch(error =>(
            res.json({error})
        ));
};

const deleteUser = (req,res,next)=>{
    const id = req.body.id;
    User.deleteOne({id:id})
        .then(response =>{ //javascript promises
            res.json({response})
        })
        .catch(error =>(
            res.json({error})
        ));
};

exports.getUsers=getUsers;
exports.addUsers=addUsers;
exports.updateUser=updateUser;
exports.deleteUser=deleteUser;