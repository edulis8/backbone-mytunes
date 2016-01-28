// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){ // params is {model: app}
    /// currentSong is an instance of SongModel

    /// so app.playerView is an instance of PlayerView associated with {model: currentSong}
    /// 
    this.playerView = new PlayerView({model: this.model.get('currentSong')});

    /// and app.libraryView is an instance of LibraryView associated with {collection: library}
    this.libraryView = new LibraryView({collection: this.model.get('library')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      console.log("Playing new song...", this.model.get('songQueue'));
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el
    ]);
  }

});
