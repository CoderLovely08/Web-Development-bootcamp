/*
    - start by npm init
    - then install npm install express
    - go ahead and create a file say server.js
    - and include the express module

*/

const express = require("express");
const app = express();

/*
    The below code gets executed when someone makes a get request to our page/server
    the / represents home of root location
    along with this we are adding a callback function which is for the purpose of what to do when that request happens
*/
app.get("/",function(request,response) {
    response.send("hiii");
    // the above code prints hiii as a response
    // similar to django's response sending when we visit a route
    // we can also send html as a response
});

// Creating a new route
app.get("/contact",function(request,response) {
    response.send("Contact me at lovely@gmail.com");
    // the above code prints hiii as a response on visiting /home route
});

// About route
app.get("/about",function(request,response) {
    response.send("This page is created by <strong>Lovely Sharma</strong>.<br>Catch me on <a href='https://www.instagram.com/lovely_sharma0812/'>Instagram</a>");
    // the above code prints hiii as a response on visiting /home route
});


// below we are creating a server at port 3000 which is listening to requests 
// along with that we are writing a callback function to log the status of the server
app.listen(3000,function () {
    console.log("Server Started!!");
});