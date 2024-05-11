// Create Schemas for ToDo

/*
* ToDo{
    title: String, 
    descriptiOn: String,
    completed: boolean
}

*/

const mongoose = require('mongoose');

const MONGODB_URL ="mongodb+srv://utkarshpant1994:KfHsTyvVIrYtgG2g@cluster0.hep5gr7.mongodb.net/todos"
 mongoose.connect(MONGODB_URL);



// Define Schemas
const ToDoSchema = new mongoose.Schema({
    title: String, 
    description: String, 
    completed: Boolean
});

const ToDo = mongoose.model('todos', ToDoSchema);

module.exports = {
    ToDo
}