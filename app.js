//1 npm init
//2 npm install express
//then code below

const express = require('express');

const app= express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use("/alldevices",  (req,res)=>{
res.status(200).json({message:  "Hurray! You are successful"})
});


app.use((req,res)=> {
    res.status(404).json({error:"Route unavailable"})
});




app.listen(8060, () => {
    console.log("Beginning of app")
});

//4. npm install helmet morgan cors mongoose