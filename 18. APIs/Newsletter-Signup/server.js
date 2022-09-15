const express = require("express")
const bodyParser = require("body-parser")
// const request = require("request")
// const { urlencoded } = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    const mailchimpTx = require("mailchimp_transactional")("f4fa3978bb4f5e8b0973a5e02e0954cb-us10");

async function run() {
  const response = await mailchimpTx.users.ping();
  console.log(response);
}

run();
});


app.use("/",function(req,res){
    var fullName = req.body.nameInput;
    var userEmail = req.body.emailInput;
    console.log(fullName);
});


// API Key
// f4fa3978bb4f5e8b0973a5e02e0954cb-us10

// List ID
// 








app.listen(3000,function(){
    console.log("Server is Running!!!");
})