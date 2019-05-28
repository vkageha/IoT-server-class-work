//1 npm init
//2 npm install express
//then code below

const express = require('express');  //third party module,no need of having a . prefix
const mainRoutes = require("./routes/mainRoutes") //custom made module/folder..therefore neeed to put . prefix

const app= express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use("/alldevices",  mainRoutes);




app.use((req,res)=> {
    res.status(404).json({error:"Route unavailable"})
});




app.listen(8060, () => {
    console.log("Beginning of app")
});

//4. npm install helmet morgan cors mongoose