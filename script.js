// Code goes here
var todoList = { 
  todos: [],
  
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  
},

  changeTodo: function(pos,todoText){
    this.todos[pos].todoText = todoText;
  
},

  deleteTodo: function(pos){
    this.todos.splice(pos, 1);

},

  toggleCompleted: function(pos){
    this.todos[pos].completed = !this.todos[pos].completed;

},

  toggleAll: function(){
    var totalTodo = this.todos.length;
    var completeTrue = 0;
    var completeFalse = 0;
    var i;
    for( i = 0; i < totalTodo; i++){
      if(this.todos[i].completed === false){
        completeFalse++;
      }
      else{completeTrue++}     
    }
     if(completeFalse === totalTodo){
       for(i = 0; i < totalTodo; i++){
         this.todos[i].completed = true;
       } 
     }
     else if(completeTrue === totalTodo){  
       for(i = 0; i < totalTodo; i++){
         this.todos[i].completed = false;
       } 
      }
    else{  for(i = 0; i < totalTodo; i++){
         this.todos[i].completed = true;
       } }
     
  }
};

var handlers = {
  
  addTodoText: function(){
    var todoText = document.getElementById('addTodoText');
    todoList.addTodo(todoText.value);
    todoText.value = '';
    view.displayTodo();
  },
  
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodo();
  },
  
  changeTodo: function(){
    var changeTodoPos = document.getElementById('changeTodoPos');
    var changeTodoText = document.getElementById('changeTodoText');
    todoList.changeTodo(changeTodoPos.valueAsNumber, changeTodoText.value);
    changeTodoPos.value = "";
    changeTodoText.value = "";
    view.displayTodo();
  },
  
  deleteTodo: function(){
    var deleteTodoPos = document.getElementById('deleteTodoPos');
    todoList.deleteTodo(deleteTodoPos.valueAsNumber);
    deleteTodoPos.value = "";
    view.displayTodo();
  },
  
  toggleCompleted: function(){
    var toggleCompletedPos = document.getElementById('toggleCompletedPos');
    if(toggleCompletedPos.value === '')
    {
      alert('Please the enter postion of todo!')
    }
    else
    {  
    todoList.toggleCompleted(toggleCompletedPos.valueAsNumber);
    toggleCompletedPos.value = '';
    }
    view.displayTodo();
  }
  
};

var view = {
  
  displayTodo: function(){
    
    var todoUl = document.querySelector('ul');
    todoUl.innerHTML = '';
    var todoTextWithCompletion = '';
    
    for(var i = 0; i < todoList.todos.length; i++)
    {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      if(todoList.todos[i].completed === true)
      {
        todoTextWithCompletion = '(x)' + todo.todoText;
      }
      else
      {
        todoTextWithCompletion = '( )' + todo.todoText;
      }
      todoLi.textContent = todoTextWithCompletion;
      todoUl.appendChild(todoLi);
    }
  }
  
};


// Assign
// var displayTodoBtn = document.getElementById('displayTodoBtn');
// var toggleAllBtn = document.getElementById('toggleAllBtn');
//EventListeners
// displayTodoBtn.addEventListener('click', function(){
//   todoList.displayTodo();
// });
// toggleAllBtn.addEventListener('click', function(){
//   todoList.toggleAll();

// });

//handlers (Events handler)
