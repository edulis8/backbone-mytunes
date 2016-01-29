// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
 // your code here!
 // associating View with SongModel
 tagName: 'ul',
 // model: SongQueue, //
 //template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
 song_template: _.template('<li>Title: <%= title%> by <%=artist%></li>'), // tds

 // ???:
 initialize:function(){
  //console.log('SongQueueEntryView.js');
  // this.render:;
 },
 events: {
  'click': function(){
    console.log(this, 'dequeues from SongQueueEntryView');
    // this.collection.get(this).remove();

    // this.$el.remove();
    // this.el.remove();
    // this.remove(); // removes the correct model, but unable to re-add.
    this.model.dequeue();
  }
  //click, fn ==>
  //this.model.dequeue()
 },

 render: function(){
  // console.log(this.$el.html(this.song_template(this.model.toJSON())));  Why toJSON???
  // instead of -- this.model.attributes
  //console.log(this.model.toJSON());
  return this.$el.html(this.song_template(this.model.attributes));
 }


});


    // 'click': function() {
    //   //this.model.play();
    //   // check if something is playing, if so, enqueue
    //   this.model.enqueue();
    // }