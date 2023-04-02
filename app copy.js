const express = require("express");
const bodyparser=require("body-parser");
const users=[{
    name:"Himanshu Dahare",
    Email:"himanshudahare6400@gmail.com",
    Age:23,
    city:"chhindwara",
    profession:"student"
},
{
    Name:"Aditya Gupta",
    Email:"aditya2@gmail.com",
    Age:33,
    City:"banglore",
    Profession:"student"
},
{
    name:"Ashish Gaur",
    Email:"ashish02gmail.com",
    Age:23,
    city:"mumbai",
    profession:"student"
}]

const app = express();

app.set('view engine', 'ejs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}))


app.get('/',(res,req)=>{
    res.render("home",{ data:users})
})


app.post("/", (req,res)=>{
    const username=req.body.Name;
    const useremail=req.body.Email;
    const userage=req.body.Age;
    const city=req.body.Country;
    const profession = req.body.Profession;

    users.push({
        Name:username,
        Email:useremail,
        Age:userage,
        City:city,
        Profession:profession
    })
    res.render("home",{
        data:users
    })
})


app.listen(3000,(req,res)=>{
  console.log("app is listening on 3000")
})