const express=require('express');
const ehb=require('express-handlebars');
const app=express();
const path=require('path');

app.engine("hbs",ehb({
    defaultLayout:"mainlayout",
    extname:'hbs',
    layoutsDir:path.join(__dirname,"views/help")
}));
app.set("view engine", "hbs");
app.get("/",(req,res)=>{
    res.render("index",{title:"Home page",
    isdisplay:false,
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
    })
})
app.listen(3000,()=>{
    console.log("Success");
})