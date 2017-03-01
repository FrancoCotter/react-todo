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
  describe('filterTodos', () => {
    var todos = [{
      id:1,
      text:'some text',
      completed:true
    },{
      id:2,
      text:'other text',
      completed:false
    },{
      id:3,
      text:'text',
      completed:true
    }];

    it('shoule return all items if showCompleted is true', () => {
      var filterTodos = TodoAPI.filterTodos(todos,true,'');
      expect(filterTodos.length).toBe(3);
    });


    it('should return some items if showCompleted is false', () => {
      var filterTodos = TodoAPI.filterTodos(todos,false,'');
      expect(filterTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filterTodos = TodoAPI.filterTodos(todos,true,'');
      expect(filterTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      var filterTodos = TodoAPI.filterTodos(todos,true,'some');
      expect(filterTodos.length).toBe(1)
    });

    it('should return all todos if searchText is empty', () => {
      var filterTodos = TodoAPI.filterTodos(todos,true,'');
      expect(filterTodos.length).toBe(3);
    });
  });
});
