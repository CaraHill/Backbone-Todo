class BackboneTodo.Models.Todo extends Backbone.Model
  paramRoot: 'todo'

  defaults:

class BackboneTodo.Collections.TodosCollection extends Backbone.Collection
  model: BackboneTodo.Models.Todo
  url: '/todos'
