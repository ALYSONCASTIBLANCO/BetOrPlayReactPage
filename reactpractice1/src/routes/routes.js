const express=require("express");
const router=express.Router();
router.get("/", (req, res)=>{
    res.send('welcome');
})
router.get("/aboutus", (req, res)=>{
    res.send('about us');
})
router.get("/signin", (req, res)=>{
    res.send("sign in");
})
module.exports=router;