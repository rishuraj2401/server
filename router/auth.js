const express=require("express");
const router =express.Router();
router.get("/", (req ,res )=>
res.send("hellio register hiiiii"));
// router.post("/register" ,(req,res)=>
// {
// console.log(req.body)
// // res.json({mesaage:res.body})
// res.send("saved")
// }
// )




module.exports=router;
