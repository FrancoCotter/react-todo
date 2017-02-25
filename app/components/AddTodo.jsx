var React = require('react');

var AddTodo = React.createClass({
  onSubmit:function(e){
    e.preventDefault();
    var todo = this.refs.todo.value;
    if(todo.length > 0){
      this.refs.todo.value = '';
      //这里出错是少写了 props，这个还是要记住
      this.props.onAddTodo(todo);
    }else{
      this.refs.todo.focus();
    }
  },
  render:function(){
    return(
      <div>
        {/*起初是这里错误，固定思维这里和 js 一样，但是
        要记住，这个是 jsx ，jsx 就要 jsx 的写法*/}
        <form onSubmit={this.onSubmit}>
          <input className="sm-centered" type="text" ref="todo" placeholder="在这里写你要添加的事项"></input>
          <button className="button expanded">添加一个待办事项</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
