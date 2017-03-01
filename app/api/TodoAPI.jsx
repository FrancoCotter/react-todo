var $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)){
      localStorage.setItem('todos',JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try{
      todos = JSON.parse(stringTodos);
    }catch(e){

    }
    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function (todos,showCompleted,searchText) {
    var filterTodos = todos;


    // Filter by showCompleted
     filterTodos = filterTodos.filter((todo) => {
       return !todo.completed || showCompleted;
     })
     //Filter by searchText

     filterTodos = filterTodos.filter((todo) => {
       var text = todo.text.toLowerCase();
       return searchText.length === 0 || text.indexOf(searchText) > -1;
     })

     //Filter todos with non-completed first
     filterTodos.sort((a, b) => {
       return a.completed - b.completed;
     })
    return filterTodos;
  }
}
