const express=require("express");
const Search=require("../models/search.models")
const router=express.Router();

router.get("", async(req,res)=>{
    try {
        const users=await Search.find().lean().exec();
        return res.status(200).send(users)
    } catch (err) {
        return res.status(500).send(err)
    }
})

router.post("", async(req,res)=>{
    try {
        const users=await Search.create(req.body).lean().exec();
        return res.status(200).send(users)
    } catch (err) {
        return res.status(500).send(err)
    }
})
module.exports=router;