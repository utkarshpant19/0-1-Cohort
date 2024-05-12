/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(){
    this.toDoList = [];

  }

  add(item){
    if(!item){
      const err = new Error('Please provide valid item');
      return err;
    }
    this.toDoList.push(item);
  }

  remove(index){

   if(index < 0 || index >= this.toDoList.length){
    console.log('Invalid Index');
    return;
   }
   this.toDoList.filter((item, idx)=> idx != index);
  }

  updateToDo(index, updatedTodo){

    this.toDoList[index] = updatedTodo;
  }

  getAll(){
    return [...this.toDoList].join(', ');
  }

  get(index){

    return this.toDoList[index];
  }
  
  clear(){
    this.toDoList = [];
    
  }

}

module.exports = Todo;
