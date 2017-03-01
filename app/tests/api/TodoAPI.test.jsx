var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should setting value to be array', () => {
      var todos = [{
        id:123,
        text:'test',
        completed:true
      }];
      TodoAPI.setTodos(todos);
      var actual = JSON.parse(localStorage.getItem('todos'));

      expect(actual).toEqual(todos);
    });


    it('should not set invalid todos array', () => {
      var badTodos = {completed: true};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localstorage data', () => {
      var actualData = TodoAPI.getTodos();
      expect(actualData).toEqual([]);
    });


    it('如果 localstorage 里的值是数组就返回 todo', () => {
      var todos = [{
        id:123,
        text:'test',
        completed:true
      }];

      localStorage.setItem('todos',JSON.stringify(todos));
      var actual = TodoAPI.getTodos();

      expect(actual).toEqual(todos);
    })
  });

});
