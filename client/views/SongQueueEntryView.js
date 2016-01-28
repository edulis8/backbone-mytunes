// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
 // your code here!
 // associating View with SongModel
 tagName: 'tr',
 model: SongQueue, //
 //template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
 song_template: _.template('<td>Title: <%= title%> by <%=artist=></td>'),

 // ???:
 initialize:function(){
  this.render();
 },

 render: function(){
  // console.log(this.$el.html(this.song_template(this.model.toJSON())));  Why toJSON???
  // instead of -- this.model.attributes
  return this.$el.html(this.song_template(this.model.toJSON()));
 }


});
