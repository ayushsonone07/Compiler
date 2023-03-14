const express = require("express")
const app = express()
const bodyP = require("body-parser")
const compiler = require("compilex")
const option = {stats : true}
compiler.init(option)

app.use(bodyP.json())
app.use("/codemirror-5.65.12", express.static("/workspaces/Compiler/codemirror-5.65.12"))
app.get("/",function(req,res){
    res.sendFile("/workspaces/Compiler/index.html")
})
app.post("/compile", function(req,res){
    var code = req.body.code
    var input = req.body.input
    var lang = req.body.lang
    var envData = { OS : "linux" }; 
    compiler.compilePython( envData , code , function(data){
        res.send(data);
    });
})

app.listen(8000)