const mongoose= require("mongoose");
const dotenv =require("dotenv")
dlink=process.env.DLINK
mongoose.connect(dlink ,
{useNewUrlParser:true , useUnifiedTopology:true,autoIndex:true}
).then(()=>{
    console.log("conection successfulllll");
}).catch((e)=>{
    console.log("error in connection" + e);
})
// module.exports=mongoose;