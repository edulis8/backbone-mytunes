// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    // params is {library: library}, and library is a collection of SongModel instances
    
    // our app instance gets a currentSong and a songQueue, new instances of those
    this.set('currentSong', new SongModel()); // has a play method
    this.set('songQueue', new SongQueue()); // is a collection, has initialize() function

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    // when anything in library (collection of SongModel instances) gets 'played'
    // set our app instance's currentsong to be that SongModel instance (that song)

    params.library.on('play', function(song){ // song is the second param of the trigger in SongModel ('this')
      this.set('currentSong', song);
    }, this);

    // Queues
    params.library.on('enqueue', function(song){ 
        this.get('songQueue').add(song);
    }, this);

    // on stop sets current song to null
    params.library.on('ended', function(song){ 
        this.get('songQueue').dequeue();
    }, this);
  }

});
