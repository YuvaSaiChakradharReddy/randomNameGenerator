const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
var names = require('sillyname');

app.use(express.static('public')); // Serve static files from the 'public' directory
app.get("/", function (request, response) {
    response.render("index.ejs", {
        title: "Welcome to Random Name Generator",
    });
});

app.post("/generate", function (req, res) {
    var randomName = names();
    console.log("Generated random name: " + randomName);

    res.render("index", {
        title: randomName
    });
});


app.listen(port, function () {
    console.log(`Server is running on http://localhost:${port}`);
});