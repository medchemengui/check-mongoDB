const user = require("../model/user")

exports.getuser=async(req,res)=>{
    try {
        const getuser=await user.find()
        res.status(200).send({msg:"done",getuser})
    } catch (error) {
        res.status(500).send(error) 
    }
}

exports.adduser=async(req,res)=>{
    try {
        const newuser=new user(req.body)
        await newuser.save()
        res.status(200).send({msg:"done",newuser})
    } catch (error) {
        res.status(500).send("callback ")
        
    }
}

exports.updateuser=async(req,res)=>{
    try {
        const newuser=await user.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).send({msg:"done",newuser})
    } catch (error) {
        res.status(500).send("callback ")  
    }
}

exports.deleteuser=async(req,res)=>{
    try {
        await user.findByIdAndDelete(req.params.id)
        res.status(200).send({msg:"done"})
    } catch (error) {
        res.status(500).send("callback ")
        
    }
}





