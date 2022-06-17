const User = require("../models/userModel");

exports.registerUser = async(req, res) => {
    const {name, email} = req.body;
    const user = await User.create({
        name,
        email, 
    })
    res.status(201).json({
        user
    })
}

exports.getAllUser = async(req, res) => {
    const user = await User.find();
    res.status(200).json({
        user
    })
}

exports.deleteUser = async(req, res) => {
    const user = await User.findById(req.params.id);
    await user.remove();
    res.status(200).json({
        success:true,
        message:"User Deleted Successfully"
    })
}

exports.updateUser = async(req, res) => {
    const newUserData = {
        name:req.body.name,
        email:req.body.email,
    }
    const user = await User.findByIdAndUpdate(req.params.id, newUserData);
    if(!user){
        res.status(500).send();
    }
    res.status(200).json({
        success:true,
    })
}