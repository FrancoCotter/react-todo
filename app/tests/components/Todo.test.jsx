var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle props with id on click', () => {
    var toggleData = {
      id:199,
      text:'todo test',
      completed:true
    };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...toggleData} onToggle={spy}/>);
    var $el = $(React.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(199)

  });
});
