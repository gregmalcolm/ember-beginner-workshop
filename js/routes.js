App.Router.map(function() {
  this.resource('stories', function() {
    this.resource('story', { path: ':story_id' });
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo("stories");
  }
});

App.StoriesRoute = Ember.Route.extend({
  model: function() {
    return this.get("store").findAll("story");
  }
});
