const express=require("express");
const app=use("express");

function middleware(req,res,next){
    count=count+1;
    console.log("count ="+count);
    next();

}




function  sum(){
    const a= parseInt(req.query.a);
    const b= parseInt( req.query.b);
    res.json({
        ans:a+b

    });


    


}


function subtract(){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

res.json({
    ans:a-b
})

}


app.get("/sum",middleware,sum);
app.listen(3000);