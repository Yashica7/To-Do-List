const express=require("express");
const bodyParser=require("body-parser");
let toDoLists=["Get up", "Eat food", "Study"];


const app= express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req,res){
  var date=new Date();

  let options={
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric"
  };
  let today=date.toLocaleDateString("en-US", options);

  res.render("list",{kindOfDay:today, lists:toDoLists});
});

app.post("/", function(req,res){
  let addItem= req.body.newItem;

  toDoLists.push(addItem);
  res.redirect("/");

});

app.listen(3000,function(req,res){
  console.log("Server started on port 3000.");
});
