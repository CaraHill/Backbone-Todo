window.BackboneTodo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
  }
};

$(function(){
  BackboneTodo.initialize();
  var todo = new BackboneTodo.Models.Todo();
  var todoView = new BackboneTodo.Views.TodosView({ model: todo });
  todoView.render();
  console.log(todoView.el)
});
