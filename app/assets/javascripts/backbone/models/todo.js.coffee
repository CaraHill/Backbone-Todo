class BackboneTodo.Models.Todo extends Backbone.Model

class BackboneTodo.Collections.TodosCollection extends Backbone.Collection
  model: BackboneTodo.Models.Todo
  utrl: '/todos'
