var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });
  it('shoudl call onSearch with entered input text', () => {
    var searchText = 'Dog';
    var spy = expect.createSpy();
    var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    todosearch.refs.searchText.value = searchText;

    TestUtils.Simulate.change(todosearch.refs.searchText)
    expect(spy).toHaveBeenCalledWith(false,'Dog');
  });

  it('should call onSearch with proper checked value', () => {
    var checked = true;
    var spy = expect.createSpy();
    var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todosearch.refs.showCompleted.checked = checked;
    TestUtils.Simulate.change(todosearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(checked,'');
  });
});
