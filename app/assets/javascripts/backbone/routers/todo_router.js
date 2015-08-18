BackboneTodo.Routers.TodoRouter = Backbone.Router.extend ({
  initialize: function(){
    alert("We got to the mother flipping router!")
    // this.todos = new BackboneTodo.Collections.TodosCollection();
    // return this.todos.reset();
    // console.log(this.todos);
  }// },

  // routes: {
  //   'index': 'index',
  //   ':id': 'show'
  // },

  // index: function(){
  //   return this.view = new BackboneTodo.Views.TodoIndexView({
  //     collection: this.todos
  //   });
  // },

  // show: function(){
  //   var todo;
  //   todo = this.todos.get(id);
  //   return this.view = new BackboneTodo.Views.TodoShowView({
  //     model: todo
  //   });
  // }

});
