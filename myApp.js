let express = require('express');
let app = express();
// console.log("Hello World")
// app.use("/public", express.static(__dirname + "/public"));
// app.get('/json',function(req,res){
//     res.json(
//         { message: "Hello json"}
//     );
// });
// app.get("/json", (req, res) => {
//     res.json({
//       message: "Hello json"
//     });
//   });
var message= 'Hello json';
app.get("/json", (req, res) => {
  if ( process.env['MESSAGE_STYLE'] === "uppercase") {
      res.json({ "message": message.toUpperCase() });
  }
  else {
    res.json({ "message": messange });
  }
});


































 module.exports = app;
