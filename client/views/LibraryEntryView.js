// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // This is for event mapping in a view. When you instantiate a view, Backbone will put events onto that DOM node for you according to this specification:
  events: {
    'click': function() {
      this.model.play();
      // check if something is playing, if so, enqueue
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
