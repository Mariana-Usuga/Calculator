//jshint esversion:6
const express= require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

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
app.get("/bmiCalculator",function(req,res){
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

const iniBalance=1000

app.post("/cuenta",function(req,res){
    var deposit=Number(req.body.deposit)
    var withdraw=Number(req.body.withdraw);
    if(deposit>0){
        var de=deposit+iniBalance;
        res.send("Total balance is: "+de)
    }
    else if(withdraw>0){
        var wi=iniBalance-withdraw;
        res.send("Total balance is  is : "+wi)
    }
})

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})