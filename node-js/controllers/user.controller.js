 const User = require("../models/user.models.js")


 const addUser = async(req,res)=>{
    try {
        const user = await User.create(req.body);
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


 