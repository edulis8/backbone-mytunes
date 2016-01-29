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

    ///// LISTENER ///////////
    this.on('add', function(){
      this.enqueue();
    }, this);

    this.on('dequeue',function(){
      this.dequeue();
    }, this);
    //////////other listeners/////////
  },
  enqueue: function(){
    if(this.length === 1){
        this.playFirst();
      }
  },
  dequeue: function(){
    console.log('Dequeues inside SongQueue.js...');
    this.shift();
    console.log(this.model,'in SongQueue');
    // transitions to next song after first song dequeues
    this.playFirst();
  },
  playFirst: function(){
    if(this.at(0)){
      this.at(0).play();
    }
  }    
});

