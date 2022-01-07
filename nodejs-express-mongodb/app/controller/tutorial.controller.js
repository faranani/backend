
const db = require("../models");
const Turtorial = db.tutorials;

// create  and save a new turtoria

exports.create= (req, res) =>{
    if(!req.body.title)
    {
        res.status(400).send({message : "ontent cannot be empty!"})
        return;
    }

};

e

// retrive all tutorial from the database
 exports.findAll = (req,res) => {

 };

  // find single turtorial with id 
  exports.findOne =(req,res) =>{

  };

   // update turtorials by id  in the request

   exports.uptade  = (req,res) =>{

   };

   // delete  a turtorial  with a specified  id 
   exports.delete = (req,res) =>{

   };

    // delete all turtorial from the database
    exports.deleteAll = (req,res)=>{

    };

