const router = require("express").Router();
const User = require("../Schemas/user");
const bcrypt = require("bcryptjs");


//Sign in 
router.post("/register", async (req, res) => {
    try{
        const {email, username, password} = req.body;
        const hashpassword = bcrypt.hashSync(password);
        const user = new user({email,username, password: hashpassword}); 
        await user.save().then(() => 
            res.status(200).json({User: user})
        );
    }catch(error) {
        res.status(400).json({ message: "User Already Exists"})
    }
});

//Login
router.post("/signin", async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user){
            res.status(400).json({message: "Please Sign Up First"})
        }

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(!isPasswordCorrect){
            res.status(400).json({message: "Invalid Password"})
        }

        const{password, ...others } = user.doc;
        res.status(200).json({others})
    }catch(error) {
        res.status(400).json({ message: "User Already Exists"})
    }
});


module.exports = router;