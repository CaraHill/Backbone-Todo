BackboneTodo.Views.TodoWidget = Backbone.View.extend({
  tagName: "div",

  className: "todo",

  template: HandlebarsTemplates.todo,

  initialize: function(){
    if (!this.model){
      throw new Error('model is required');
    }
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
