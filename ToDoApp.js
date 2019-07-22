var todoList = {
  todos: [],
  displayTodo: function(){
    console.log('My Todos: ');
    if(this.todos.length === 0){
      console.log('Todos List Empty!');
}
    else{
      for(var i = 0; i < this.todos.length; i++){
        if(this.todos[i].completed === true){
          console.log('(x)',this.todos[i].todoText,this.todos[i].completed); 
        }
        else{
          console.log('( )',this.todos[i].todoText,this.todos[i].completed);
        }
  }
 }
},
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
});
    this.displayTodo();
},
  deleteTodo: function(pos){
    this.todos.splice(pos,1);
    this.displayTodo();
},
  changeTodo: function(pos, todoText){
    this.todos[pos].todoText = todoText;
    this.displayTodo();
},
  toggleCompleted: function(pos){
    this.todos[pos].completed = !this.todos[pos].completed;
    this.displayTodo();
},
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var completeTodo = 0;
    var completeTrue = 0;
    for(var i = 0; i < totalTodos; i++){
      if(this.todos[i].completed === false ){
        completeTodo++;
      }
      if(this.todos[i].completed === true){
         completeTrue++;
      }
    }
    if(completeTrue===totalTodos){
      for(var i = 0; i < this.todos.length; i++){
        this.todos[i].completed = false;  
 }
}
    if(completeTodo===totalTodos){
      for(var i = 0; i < this.todos.length; i++){
        this.todos[i].completed = true;
     }
   }
     this.displayTodo();
},
};
