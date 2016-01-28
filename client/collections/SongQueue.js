// SongQueue.js - Defines a backbone model class for the song queue.

/// So it is a collection and its prototype is Songs
/// Probably stores SongModel instances in a certain way
/// has initialize function
// Collection
var SongQueue = Songs.extend({
// Collect songs that have been 'enqueued'?
  // http://backbonejs.org/#Collection-model
  // Only insert to model if 


  initialize: function(){
  // Dequeue in here
  },
  playFirst: function(){
    this.at(0).play();
    console.log('this',this);
  }

});


  // model: function(model){
  //   if(model){
  //       return // elsewhere
  //   } else {
  //     return // enqueue
  //   }
  // },