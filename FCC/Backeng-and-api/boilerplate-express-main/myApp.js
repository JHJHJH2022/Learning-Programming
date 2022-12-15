const bodyParser = require('body-parser');
let express = require('express');
let app = express();
require('dotenv').config();


// app.use(bodyParser.urlencoded({extended: false}));

// app.post("/name",(req, res)=>{
//     const {first, last} = req.body;
//    res.json({name: `${first} ${last}`});
// })



// app.get("/name", (req,res)=>{
//     //?first=firstname&last=lastname
//     const {first, last} = req.query;
//     res.json({name: `${first} ${last}`});
// })


// app.get("/:word/echo",(req,res)=>{
//     let word = req.params.word;
//     res.json({echo:word});
// });


// app.get("/now",(req, res, next)=>{
//     req.time = new Date().toString();
//     next();
// }, (req, res)=>{
//     res.json({time:req.time});
// });

app.use((req,res, next)=>{
    console.log (req.method+" "+req.path+" - "+req.ip);
    next();
})

app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public",express.static(__dirname+"/public"));



// app.get("/json",(req, res)=>{
//     let greeting = "Hello json";
//     if (process.env.MESSAGE_STYLE === "uppercase"){
//         greeting = greeting.toUpperCase();
//     }
//     res.json({message: greeting});
// });







































 module.exports = app;
