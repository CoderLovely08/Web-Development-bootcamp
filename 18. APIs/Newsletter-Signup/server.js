const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")

const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});


app.use("/",function(req,res){
    const fname= req.body.fnameInput;
    const lname= req.body.lnameInput;
    const userEmail = req.body.emailInput;
    
    const data = {
        members: [
            {
                email_address: userEmail,
                status: "subscribed",
                merge_fields: {
                    FNAME: fname,
                    LNAME: lname
                }
            }
        ]
    }
    const jsonData = JSON.stringify(data);
    
    const url = "https://us10.api.mailchimp.com/3.0/lists/9178bac9ae";
    const options = {
        method: "POST",
        auth: "lovely:f4fa3978bb4f5e8b0973a5e02e0954cb-us10"
    }
    const request = https.request(url,options,function(response){
        if(response.statusCode===200){
            res.sendFile(__dirname+"/success.html")
        }else{
            res.sendFile(__dirname+"/failure.html")
        }
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    });

    request.write(jsonData);
    request.end();
});


app.post("/failure",function(req,res){
    res.redirect("/");
})
// API Key
// f4fa3978bb4f5e8b0973a5e02e0954cb-us10

// List ID
// 9178bac9ae




app.listen(3000,function(){
    console.log("Server is Running!!!");
})