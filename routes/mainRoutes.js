const express = require ('express');

const router = express.Router();



router.get('/', (req,res)=>{
    res.status(200).json({message:  "Hurray Val! You are successful"})
    } );


router.get('/strange', (req,res) => {
    res
    .status(200)
    .json({message:"Hurray! You are successful. This is a strange thing"})
});


module.exports =  router;