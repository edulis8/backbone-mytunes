// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();

    // LISTEN WHEN SOMETHING IS ADDED TO COLLECTION, DO SOMETHING
    this.collection.on('add remove', function(){
      this.render();
    }, this);
     },

  events: {
    
  },

  // this.on('enqueue')

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    //this.$el.children().detach();
    //console.log("SongQueue", this.collection);
    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        // console.log("test: ", song);
        return new SongQueueEntryView({model: song}).render();
        // return this.$el
        // return new SongQentryView!
      })
    );
  }


});
