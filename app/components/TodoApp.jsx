var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI')
var TodoApp = React.createClass({
  getInitialState:function(){
    return {
      showCompleted:false,
      searchText:'',
      todos:TodoAPI.getTodos()
    };
  },
  componentDidUpdate:function(){
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo:function(text){
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id:uuid(),
          text:text,
          completed:false
        }
      ]
    })
  },
  handleSearch: function (showCompleted,searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    })
  },
  handleToggle:function(id){
    /*首先定义了一个 updateTodos 的函数，使用 map 方法遍历这个 todos，在函数里
    *判断todo的id 是否等于当前点击的 id，如果是，就吧 todo 的completed 变为非
    * 再返回遍历的这个 todo，最后设置当前的 todos 为 updatetodos
    */
    var updateTodos = this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos:updateTodos});
  },
  render:function(){
    var {todos,showCompleted,searchText} = this.state;
    var filterTodos = TodoAPI.filterTodos(todos,showCompleted,searchText);
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filterTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div> 
    )
  }
});

module.exports = TodoApp;
