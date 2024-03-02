const TodoModel=require('../models/TodoModel')

module.exports.getTodos=async(req,res)=>{
    const todo=await TodoModel.find()
    res.send(todo)
}
module.exports.saveTodos=(req,res)=>{
    const {todo}= res.body

    TodoModel.create({todo})
    .then((data)=>{
        console.log("Saved Successfully...");
        res.status(201).send(data)
    })
    .catch((err)=>{
        console.log(err);
    })




   
}