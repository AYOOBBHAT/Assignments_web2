const express =require('express');
const app=express();


// function sum(n){
//     let ans=0;
//     for(let i=0;i<=n;i++){
//         ans=ans+i;

//     }
//     return ans;

// }

// app.get("/",function(req,res){
//     const n=req.query.n;
//     const ans=sum(n);

//     res.send("hii there +  "+ ans);


// })

// app.listen(3000);


const users=[{
    name:"Abc",
    kidneys:[{
        healthy:false
    }]
}]


app.use(express.json());

app.get("/",function(req,res){
    const abKidneys=users[0].kidneys;
    const numberofKIdneys=abKidneys.length;

    let LHK=0;
    for(let i=0;i<abKidneys.length;i++){
        if(abKidneys[i].healthy){
            LHK=LHK+1;


        }
    }
    const UHK=numberofKIdneys - LHK;

    res.json({
        numberofKIdneys,
        LHK,
        UHK,
    })



});


app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"done"
    })


})

app.put("/",function(req,res){

    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;

    }
    res.json({});


})


app.delete("/",function(req,res){
    let newHkidney=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newHkidney.push({
                healthy:true
            })
        }
    }
})

app.listen(3000);