var todoList = { 
  todos: [],
  displayTodo: function(){
    console.log('My Todos: ');
    if(this.todos.length === 0)
   	  {
  		console.log('Todo List is empty!');
	  }
    else{
     for(var i = 0; i < this.todos.length; i++){
       if(this.todos[i].completed === true){ 
         console.log('(x)', this.todos[i].todoText,this.todos[i].completed);
		}
       else {
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
  changeTodo: function(pos,todoText){
    this.todos[pos].todoText = todoText;
    this.displayTodo();
},
  deleteTodo: function(pos){
    this.todos.splice(pos, 1);
    this.displayTodo();
},
  toggleCompleted: function(pos){
    this.todos[pos].completed = !this.todos[pos].completed;
    this.displayTodo();
},
  toggleAll: function(){
    var totalTodo = this.todos.length;
    var completeTrue = 0;
    var completeFalse = 0;
    for(var i = 0; i < totalTodo; i++){
      if(this.todos[i].completed === false){
        completeFalse++;
      }
      else{completeTrue++}     
    }
     if(completeFalse === totalTodo){
       for(var i = 0; i < totalTodo; i++){
         this.todos[i].completed = true;
       } 
     }
     else if(completeTrue === totalTodo){  
       for(var i = 0; i < totalTodo; i++){
         this.todos[i].completed = false;
       } 
      }
    else{  for(var i = 0; i < totalTodo; i++){
         this.todos[i].completed = true;
       } }
     this.displayTodo();
}
};
