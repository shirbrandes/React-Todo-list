const {Schema, model} = require("mongoose")
 // סכמה - קלאס שמאפשר לי להגדיר תבנית מסויימת לכל todo
 // מודל - 
const todoSchema = new Schema({
    task:String,
    status:{
        type: Boolean,
        default:false
    }
}) 

const TodoModel = model('todo', todoSchema)
// todo => todos הופך לבד


const initDataBase = async () =>{
    const tasks = ["Find a new job", "Go for a walk with my dog", "Make dinner","To finish the project"]
    for (const task of tasks) {
        const taskDoc = new TodoModel({task})
        await taskDoc.save()
    }


}
module.exports = {TodoModel, initDataBase}