const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// whenever we want to grab the form data we will use urlencoded 
// with extended=true it allows to post nested objects
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    console.log(__dirname);
    // always use __dirname for providing absolute path rather than relative paths, otherwise it's gonna throw an error
});

// this portion gonna fulfill all the post requests
app.post("/",function(req,res){
    // res.send("Thanks for posting!");
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;
    res.send("The result is: "+result);
});


/*
    - in order to access form data use a module named body-parser
    - npm install body-parser
    - import it inside the project
    - since it is used with the express use app.use() method
    - add this line - app.use(bodyParser.urlencoded({extended: true}));

    app.get is for displaying
    app.get is for responding
*/


app.listen(3000,function(){
    console.log('SERVER RUNNING!');
})
