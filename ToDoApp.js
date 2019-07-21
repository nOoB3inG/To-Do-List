var todoList = {
  todos: [],
  displayTodos: function(){
    console.log('My Todos: ');
    for(var i = 0; i < this.todos.length; i++){
      console.log(this.todos[i].todoText, this.todos[i].completed);
 }
},
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
});
    this.displayTodos();
},
 changeTodo: function(pos,value){
    this.todos[pos].todoText = value;
    this.displayTodos();
},
 deleteTodo: function(pos){
   this.todos.splice(pos,1);
   this.displayTodos();
},
 toggleCompleted: function(pos){
   var todo = this.todos[pos];
   todo.completed = !todo.completed;
   this.displayTodos();
},
 checkCompleted: function(){
   var lastTodo = this.todos[this.todos.length - 1];
   var lastTodoStatus = lastTodo.completed;
   if( lastTodoStatus == true){
     console.log('Todos List is Completed.');
 } else{
      console.log('Todos List is not complete!');
};
}

}

        
