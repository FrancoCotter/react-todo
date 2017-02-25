var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoApp = React.createClass({
  getInitialState:function(){
    return {
      todos:[
        {
          id:1,
          text:'遛狗'
        },{
          id:2,
          text:'清扫院子'
        },{
          id:3,
          text:'看电影'
        },{
          id:4,
          text:'和路西去谈恋爱'
        }
      ]
    };
  },
  handleAddTodo:function(text){
    alert('add todo:'+text);
  },
  render:function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
