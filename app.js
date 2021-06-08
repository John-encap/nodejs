const express =require('express');
var bodyParser = require('body-parser');


const app=express();
app.use(bodyParser.json())

app.get('/test',(req,res)=>{
    console.log('hey');

    res.send({
        status:"success"
    })
});

app.post('/gihan/login',(req,res)=>{
    console.log(req.body.email);
    var name=req.body.fName;
    res.send("hey "+name);
});


app.listen(3000,()=>
{console.log("Listing to part 3000 ......")})