let express = require('express');
let app = express();
// console.log("Hello World")
app.use("/public", express.static(__dirname + "/public"));
app.get('/json',function(req,res){
    res.send(__dirname + "/views/index.html")
    res.json(
        {message:"Hello json"}
    );
});



































 module.exports = app;
