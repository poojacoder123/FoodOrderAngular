 const User = require("../models/user.models.js");
 var bcrypt = require('bcryptjs');


 const addUser = async(req,res)=>{
    const {username, password} = req.body;
    try {
        const salt = await bcrypt.genSalt(10); 
            const hashedPassword = await bcrypt.hash(password,salt)

        const user = await new User.create(req.body);
        var salt = bcrypt.genSaltSync(10);
        res.status(201).json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }


 }

 const getUser = async(req,res)=>{
    try {
        const user = await User.find({});
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
 }

  const getUserByID = async(req,res)=>{
    try {
        const { id } = req.params;
        const user = await User.findById(id);
    
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
 }

 const updateUser = async(req,res)=>{
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
 }


 const deleteUser = async(req,res)=>{
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(User);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
 }

module.exports = {
    getUser, addUser, deleteUser, getUserByID, updateUser
}


 