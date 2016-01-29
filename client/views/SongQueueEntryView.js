// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
 tagName: 'ul',
 song_template: _.template('<li>Title: <%= title%> by <%=artist%></li>'), // tds
 initialize:function(){
  this.model.on('change', function(){
  });
 },
 events: {
  'click': function(){
  this.model.dequeue();
  }
 },
  render: function(){
    return this.$el.html(this.song_template(this.model.attributes));
 }


});

