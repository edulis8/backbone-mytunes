// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',
  
  initialize: function() {
    
    // BEN SAID PUT THIS HERE DEFINITELY
    // console.log('initialize',this);

    // this.$el.on('ended', function(){

    //   console.log('in anon' , this.model);

    //   this.model.ended();

    // }).bind(this);
    
  },
  event:{
    // on click or xx trigger
    // execute setSong
    // listen for update on currentSong
  },
  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
    

    // .bind("ended", function(){
    //   this.model.ended(); //trigger 'ended'
    //   console.log("ended");

    //}.bind(this)); //bind to object instead of DOM element
  }

});

// you can have a listener
// this.$el.on(listener)