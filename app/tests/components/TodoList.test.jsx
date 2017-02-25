var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var TodoList = require('TodoList');
var Todo = require('Todo');
describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one  Todo component for each todo item', () => {
    var todos = [
      {
        id:1,
        text:'some text'
      },
      {
        id:2,
        text:'clean room'
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList,Todo);

    expect(todoComponents.length).toBe(todos.length);
  })
});
