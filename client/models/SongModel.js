// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    // Associate with SongQueueEntryView
    // model = new SongQueueEntryView({model:this});
  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },  
  enqueue: function(){
    this.trigger('enqueue', this);
  },
  dequeue: function(){
    // We should define this
    this.trigger('dequeue', this);
  }, 
  ended: function(){
    // when a song is finished, dequeue
    //console.log('inside SongModel:', this);
    this.trigger('ended', this);
  }

});
