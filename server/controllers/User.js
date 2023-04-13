const User = require('../models/User');

module.exports.signupPost = async (req, res) =>{
    const {username, email, password} = req.body;
    try {
        const user = await User.create({username, email, password});
        if(user){
            res.status(201).json({
                success: true,
                user
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            error: error.errors
        })
    }

}