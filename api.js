const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use("/codemirror-5.65.12", express.static("/workspaces/Compiler/codemirror-5.65.12"))
app.use("/",function(req,res){
    res.sendFile("/workspaces/Compiler/index.html")
})
app.listen(8000)