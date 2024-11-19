const Category = require("../models/category.model.js")

const getCategory  = async (req,res)=>{
try {
  let Category = await Category.find({});
  res.status(200).json(user)
} catch (error) {
    res.status(400).json({message: error.message})
}


}

const createCategory  = async (req,res)=>{
try {
    let category = new Category({
        name : req.body.name,
        icon : req.body.icon,
        Image : req.body.image,
        color : req.body.color
    })

    category = await category.save();
    res.status(200).json({message : "Category saved successfully"})

} catch (error) {
    res.status(400).json({message: error.message})
}



}

module.exports = {
    getCategory,
    createCategory
}