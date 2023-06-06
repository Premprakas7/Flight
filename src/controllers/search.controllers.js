const express=require("express");
const Search=require("../models/search.models")
const router=express.Router();

router.get("", async(req,res)=>{
    try {
        const searches=await Search.find().lean().exec();
        return res.status(200).send(searches)
    } catch (err) {
        return res.status(500).send(err)
    }
})

router.post("", async(req,res)=>{
    try {
        const searches=await Search.create(req.body).lean().exec();
        return res.status(200).send(searches)
    } catch (err) {
        return res.status(500).send(err)
    }
})

router.get("/:id", async(req,res)=>{
    try{
        const searches=await Search.findById(req.params.id).lean().exec();
        return res.status(200).send({searches})
    }catch(err){
        return res.status(500).send({err})
    }
})

router.put("/:id", async(req,res)=>{
    try{
        const searches=await Search.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send({searches})
    }catch(err){
        return res.status(500).send({err})
    }
})

router.delete("/:id", async(req,res)=>{
    try{
        const searches=await Search.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send({searches})
    }catch(err){
        return res.status(500).send({err})
    }
})

router.get("/:key", async(req,res)=>{
    try {
        console.log(req.params.key)
        const searches=await Search.find(
            {
                "$or":[
                    {"from":{$regex:req.params.key}},
                    {"to":{$regex:req.params.key}}
                ]

            }
        ).lean().exec();
        return res.status(200).send(searches)
    } catch (err) {
        return res.status(500).send(err)
    }
})

module.exports=router;