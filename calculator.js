//jshint esversion:6
const express= require("express");
/*const bodyParser=require("body-parser");*/

const app=express();
/*app.use(bodyParser.urlencoded({extended:true}));*/

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);
    var result=num1+num2;
    res.send("The result of the calculation is "+result)
})

//-----Calculator-bmi---------
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html")
})

app.post("/bmicalculator",function(req,res){
    var w=parseFloat(req.body.weight);
    var h=parseFloat(req.body.height);
    var bmi=w/(h*h)
    res.send("Your bmi es: "+bmi)
})
//--------Cajero------
app.get("/cuenta",function(req,res){
    res.sendFile(__dirname+"/cuenta.html")
})
app.post("/cuenta",function(req,res){
    var availa=Number(req.body.dispo);
    var depo=Number(req.body.deposit);
    var money=availa+depo;
    res.send(money)
})

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})