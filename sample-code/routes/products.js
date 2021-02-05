const router = require("express").Router(); 

router.get("/get", (req,res) => {
    res.send("Sent this from the get request");
});

router.post("/create", (req,res) => {
    res.send("Sending some information from the post");
});

router.put("/update", (req,res) => {
    res.send("Some update sent");
});

router.delete("/delete", (req,res)=>{
    res.send("Deleted some information");
});

module.exports = router; 