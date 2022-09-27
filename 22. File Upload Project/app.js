//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// const imgur = require("imgur")
// const imgur = require("imgur")
const imgur = require('imgur-uploader');
const fs = require("fs")
const fileupload = require("express-fileupload");
const { log } = require("console");
// const loadsh = require("lodash")

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(fileupload());

/*-------------------------------------------
                Global Variables
  -------------------------------------------*/


/*-------------------------------------------
                Home route
  -------------------------------------------*/
app.get("/", function (req, res) {
    res.render("home");
});

app.post("/upload", function (req, res) {
    console.log(req.files);
    if (!req.files) {
        return res.status(400).send("No files Found!");
    }
    let myfile = req.files.mysamplefile;
    let uploadPath = __dirname + "/uploads/" + myfile.name;
    myfile.mv(uploadPath, function (err) {
        if (err) console.log("Error!");
        console.log("Saved to folder");

        imgur(fs.readFileSync(uploadPath)).then(data=>{
            console.log(data);
        });
    });
})


app.listen(3001, function () {
    console.log("Server is running on port 3001!");
})