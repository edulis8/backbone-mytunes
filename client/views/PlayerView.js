// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',
  
  initialize: function() {
    
    // BEN SAID PUT THIS HERE DEFINITELY
    // console.log('initialize',this);
    console.log(this.el, 'from PlayerView');

    this.$el.on('ended', ( function(){this.model.ended();} ).bind(this));


  ///////// NOTE: in solutions video, anon. function is wrapped in parens before .bind
    
  },
  event:{
   // 'ended audio': 'dequeue'
    // on click or xx trigger
    // execute setSong
    // listen for update on currentSong
  },
  dequeue: function(){
    console.log("test");
  },
  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    console.log(this.model,"from Play View");
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
    //bind to object instead of DOM element
  }

});
 // .bind("ended", function(){
 //      this.model.ended(); //trigger 'ended'
 //      console.log("ended");

 //    }.bind(this)

// you can have a listener
// this.$el.on(listener)