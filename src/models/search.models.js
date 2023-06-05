const mongoose=require("mongoose");

const searchSchema=new mongoose.Schema({
    from:{type:String, required:true},
    to:{type:String, required:true},
    indigo:{type:String, required:true},
    airAsia:{type:String, required:true},
    vistara:{type:String, required:true},
},
{
    timestamps:true,
}
)

module.exports=mongoose.model("search",searchSchema)