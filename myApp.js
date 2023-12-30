let express = require('express');
let app = express();
console.log("Hello World")
app.use(express.static(__dirname + "/public"));
//it acts as middleware
app.get('/',function(req,res){
    res.sendFile(__dirname + '/public')
})



































 module.exports = app;
