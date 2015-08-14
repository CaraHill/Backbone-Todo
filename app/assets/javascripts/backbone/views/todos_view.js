BackboneTodo.Views.TodosView = Backbone.View.extend({
  initialize: function(){
    if(!this.model){
      throw new Error('model is required');
    }

    this.listenTo(this.model, 'reset', this.render);
  },

  render: function(){
    this.$el.empty();

    if(this.model.length === 0) { return this }

    this.model.each(function(todo){
      var view = new BackboneTodo.Views.TodoWidget({
        model: todo
      });

      this.$el.append(view.render().el);
    }, this);
  }
});
