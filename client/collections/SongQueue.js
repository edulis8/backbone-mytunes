// SongQueue.js - Defines a backbone model class for the song queue.

/// So it is a collection and its prototype is Songs
/// Probably stores SongModel instances in a certain way
/// has initialize function
// Collection
var SongQueue = Songs.extend({
// Collect songs that have been 'enqueued'?
  // http://backbonejs.org/#Collection-model
  // Only insert to model if 


//When a song is added
  // plays it if it's the only song in the queue
  initialize: function(){
    // this.on.collection // undefined

    ///// LISTENER ///////////
    this.on('add', function(){
      // render songQueueView
      console.log('view', this.view);
      console.log('Added to SongQueue');
    });



  // Dequeue in here, said Ben.
  // spec: 'when a song ends, remove it from queue'
  // dq uses remove
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