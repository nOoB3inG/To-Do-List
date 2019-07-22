var todoList = {
  todos: [],
  displayTodo: function(){
    if(this.todos.length === 0){
      console.log('Todo list is empty!');
  }   else{ 
           console.log('My Todo List');
           for(var i = 0; i < this.todos.length; i++){
              if(this.todos[i].completed === true){
                console.log('(x)',this.todos[i].todoText,this.todos[i].completed);
              }else{console.log('( )',this.todos[i].todoText,this.todos[i].completed);}
            }
  }
},
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
});
    this.displayTodo();
    console.log('Added Successfully');
},
  deleteTodo: function(pos){
    this.todos.splice(pos,1);
    this.displayTodo();
    console.log('Deleted Successfully.');
},
  changeTodo: function(pos, todoText){
    this.todos[pos].todoText = todoText;
    this.displayTodo();
    console.log('Text Changed.');
},
  toggleCompleted: function(pos){
    var todo = this.todos[pos];
    todo.completed = !todo.completed;
    this.displayTodo();
    console.log('Toggled.');
},
  toggleAll: function(){
    for(var i = 0; i < this.todos.length ; i++){
      if(this.todos[i].completed === true){
        this.todos[i].completed = true;  
}else{ this.todos[i].completed = !this.todos[i].completed;
 }
  this.displayTodo();
} 
}
}


        
