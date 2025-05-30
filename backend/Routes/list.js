const router = require("express").Router();
const User = require("../Schemas/user");
const List = require("../Schemas/list");
const user = require("../Schemas/user");


//create
router.post("./addTask", async (req, res) => {
    try{
        const {title, body, email} = req.body;
        const existinguser = await user.findOne({ email });
        if(existinguser){
            const list = new List({ title, body, user: existinguser});
            await list.save().then(() => res.status(200).json({ list }));
            existinguser.list.push(list);
            existinguser.save();

        }
    }catch (error){
        console.log(error)
    }
});

//update
router.put("./updateTask/: id", async (req, res) => {
    try{
        const {title, body, email} = req.body;
        const existinguser = await user.findOne({ email });
        if(existinguser){
            await List.findByIdAndUpdate(req.params.id, {title, body});
            List.save().then(() => res.status(200).json({message: "Task Updated"}));
        }
    }catch (error){
        console.log(error)
    }
});

//delete
router.delete("./deleteTask/: id", async (req, res) => {
    try{
        const { email} = req.body;
        const existinguser = await user.findOneAndUpdate({ email }, {$pull: req.params.id});
        if(existinguser){
            await List.findByIdAndDelete(req.params.id).then(() => res.status(200).json({message: "Task Deleted"}));
        }
    }catch (error){
        console.log(error)
    }
});


//getTasks
router.get("./getTasks/id", async (req, res) => {
    const list = await user.find({ user: req.params.id}).sort({createdAt: -1});
    if(list.length !== 0){
        res.status(200).json({list: list});
    }else{
        res.status(200).json({message: "No Tasks"})
    }
});

module.exports = router;