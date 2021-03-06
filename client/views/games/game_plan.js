Template.gamePlan.helpers({ 
  ownGame: function() {
    return this.userId == Meteor.userId(); 
  },
  submitted: function() {
    return new Date(this.submitted).toString(); 
  },
  commentsCount: function() {
    return Comments.find({gameId: this._id}).count();
  },
});

Template.gamePlan.events({
  'click .delete': function(e) { 
    e.preventDefault();

    if (confirm("Delete this game?")) { 
      var currentGameId = this._id; 
      Games.remove(currentGameId); 
      Router.go('gamesList');
    } 
  }
});