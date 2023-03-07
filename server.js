const express=require('express')
const app=express()
const port=4555
const userroot=require('./router/userrouter')
const connectdb = require("./config/connection")



app.use(express.json())
app.use("/api/user",userroot)
connectdb()
app.listen(port,console.log(`serveur connecter ${port}`))


