const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html")
});

app.post("/", function (req, res) {
    const query = req.body.cityInput;
    const apiKey = "7c481d9ac1b552236f593886500f6b72";
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            console.log(data);
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const temperature = weatherData.main;
            console.log(temperature);
            // we can only use res.send once but we can use multiple res.write
            res.send("The current temperature in " + query + " is " + temperature + " degrees celcius.")
        });
    });
})


app.listen(3000, function () {
    console.log("Server is running on port 3000.");
});