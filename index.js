const express=require('express');
const ehb=require('express-handlebars');
const app=express();
const path=require('path');
const hbs=ehb.create({
    defaultLayout:"mainlayout",
    extname:'hbs',
    partialsDir:path.join(__dirname,"views/partial"),
    layoutsDir:path.join(__dirname,"views/help"),
    helpers:{
        calculate:function(value){
            return value*5;
        },
        list:function(value,options)
        {
            let cot="<ul>";
            for(i=0;i<value.length;i++)
            {
                cot=cot+ "<li>" +options.fn(value[i])+"</li>";
            }
            return cot+"</ul>";
                }
    }
})
app.engine("hbs",hbs.engine);
app.set("view engine", "hbs");
app.get("/",(req,res)=>{
    res.render("index",{title:"Home page",
    isdisplay:false,
    people:[
        {firstname:"Arpit",lastname:"Trivedi"},
        {firstname:"Arpit",lastname:"Trivedi"},
        {firstname:"Arpit",lastname:"Trivedi"},
    ],
    about:"fdnjkjfvvfnjfj"});
})
app.get("/dash",(req,res)=>{
    res.render("dashboard",{list:true})
})
app.get("/loop",(req,res)=>{
    res.render("loop",{
        people:[
            "Arpit",
            "fejknj",
            "vjnjv"
        ],
        user:{
            username:"Arpit",
            phone:"7899"

        }
        ,
        lists:[
            {
                items:["MAngo","apple","Peach"]
            },
            {
                items:["Potato","Onion","Peas"]
            }
        ]
    })
})
app.get('/look',(req,res)=>{
    res.render("lookup",{
        people:[
            "Arpit",
            "fejknj",
            "vjnjv"
        ],
        user:{
            username:"Arpit",
            phone:"7899"

        }

    })
})
app.listen(3000,()=>{
    console.log("Success");
})