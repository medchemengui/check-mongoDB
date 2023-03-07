const express=require('express')
const { model } = require('mongoose')
const { adduser,getuser,updateuser,deleteuser } = require('../controler/usercontroler')
const userrout=express.Router()
userrout.post('/adduser',adduser)
userrout.get('/getuser',getuser)
userrout.put('/updateuser/:id',updateuser)
userrout.delete('/deleteuser/:id',deleteuser)
module.exports=userrout



