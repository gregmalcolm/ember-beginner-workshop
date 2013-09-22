App.Router.map(function() {
  this.resource('stories', function() {
    this.route('new');
    this.route('edit', { path: ':story_id/edit' });
    this.route('show', { path: ':story_id' });
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

App.StoryRoute = Ember.Route.extend({
  model: function(params) {
    return this.get("store").find("story", params.story_id);
  }
});

