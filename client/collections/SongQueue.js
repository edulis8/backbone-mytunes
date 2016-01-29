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
    //this.set('first', 0);

    ///// LISTENER ///////////
    this.on('add', function(){
      console.log('Added to SongQueue');
      console.log('sq length',this.length)
      if(this.length === 1){
        this.playFirst();
      }
    });
    this.on('dequeue',function(){
      this.dequeue();
    }, this);
    //////////other listeners/////////
    // this on add, this.enqueue, this
    // this on dequeue, this.dequeue, this
    // this on ended, this.playNext, this

  // Dequeue in here, said Ben.
  // spec: 'when a song ends, remove it from queue'
  // dq uses remove
  },
  dequeue: function(){
    //var first = this.get('first');
    console.log('Dequeues inside SongQueue.js...');
    this.shift();
    console.log(this.model,'in SongQueue');
    this.playFirst();
    //this.set('first', ++first);
  },
  playFirst: function(){
    //var first = this.get('first');

    console.log(this);
    //console.log('playFirst is playing: ',this.at(first).play());
    if(this.at(0)){
      this.at(0).play();
    }
  }    
});



  // model: function(model){
  //   if(model){
  //       return // elsewhere
  //   } else {
  //     return // enqueue
  //   }
  // },