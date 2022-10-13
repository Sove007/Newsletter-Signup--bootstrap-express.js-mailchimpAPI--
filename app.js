const bodyParser = require("body-parser");
const client = require("@mailchimp/mailchimp_marketing");
const express = require("express");

const app = express();
client.setConfig({
  apiKey: "fc4edc8e45f568cf6fc93c3ac6b71d38-us11",
  // apiKey: "fc4edc8e45f568cf6fc93c3ac6b71d38-us11",
  server: "us11",
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html")
    // res.send();
})

app.post("/",function(req,res){
  const subscribingUser = {
    firstNamee: req.body.fName,
    lastNamee: req.body.lName,
    Email: req.body.email
  };
  console.log(subscribingUser.firstNamee,subscribingUser.lastNamee,subscribingUser.Email);

const run = async () => {
  // if(response.statusCode === 200){
    try{
  const response = await client.lists.addListMember("e6206f74ce", {
    email_address: subscribingUser.Email,
    status: "subscribed",
    merge_fields: {
      FNAME: subscribingUser.firstNamee,
      LNAME: subscribingUser.lastNamee
    }

  });
  console.log(response);
  
  //  res.send("Successfully Subscribed!");
    res.sendFile(__dirname+"/success.html");
  }catch(err){
    console.log(err.status);
    res.sendFile(__dirname+"/failure.html");
  }
  }; 
run();
});
app.post("/failure", function(req, res) {
  res.redirect("/");
})

// app.listen(3000, function(req,res){
app.listen(process.env.PORT || 3000, function(req,res){
    console.log("Server is listening at port 3000");
});







//Api key
// fc4edc8e45f568cf6fc93c3ac6b71d38-us11
// fc4edc8e45f568cf6fc93c3ac6b71d38-us11

// Audience ID
// e6206f74ce
// e6206f74ce
// e6206f74ce