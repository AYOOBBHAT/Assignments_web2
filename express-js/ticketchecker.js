const express=require("express");
const app=express();

function isOld(age){
    if(age>14){
        return true;


    }
    else {
        return false;
    }
}


function isOldMiddlewarw(req,res,next){
    if(age>14){
        next();
    }
    else{
        res.json({msg:"sorryur under age"});
    }

}

function ticket_checker(req,res,next){
    const ticket=req.query.ticket;
    if(ticket=="free"){
        next();

    }

    else {
        res.status(403).send("acess denied");

    }
}
app.use (express.json());


app.get("/ride1" ,function (req,res){

    if(isOld(req.query.age)){
        res.json({
            msg:"you sucessfully booked ride1 "
        })

    }
   
})

app.get("/ride2" ,function (req,res){

    if(isOld(req.query.age)){
        res.json({
            msg:"you sucessfully booked ride2 "
        })

    }
   
})





app.listen (3000);
