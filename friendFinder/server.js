//npm modules
var express = require('express');
var path = require('path');



var app = express();
//local and deployed PORT
var PORT = process.env.PORT || 3000;

//header
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static(path.join(__dirname + 'app/public')));
require("./app/routing/htmlRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener
app.listen(PORT, function () {
    console.log(`Listening on ${PORT}`);
});