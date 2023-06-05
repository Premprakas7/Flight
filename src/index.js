const express=require("express");

const SearchController=require("./controllers/search.controllers")

const app=express()
app.use(express.json());

app.use("/search", SearchController)

module.exports=app;