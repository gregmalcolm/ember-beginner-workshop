App.Router.map(function() {
  this.resource('stories', function() {
    this.route('new');
  });

  this.resource('story', { path: '/stories/:story_id' }, function() {
    this.route('section', { path: '/sections/:section_id' });
    this.route('edit');
  });

  //this.resource('editstory', { path: '/stories/:story_id/edit' });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function(params) {
    this.transitionTo("stories");
  }
});

App.StoriesRoute = Ember.Route.extend({
  model: function(params) {
    return this.get("store").findAll("story");
  }
});

App.StoriesIndexRoute = App.StoriesRoute.extend({
});

App.StoryRoute = Ember.Route.extend({
  model: function(params) {
    return this.get("store").find("story", "100");
  }
});

App.SingleStoryRoute = Ember.Route.extend({
  model: function(params) {
    return this.modelFor("story");
  }
});

App.StoryIndexRoute = App.SingleStoryRoute.extend({
  model: function(params) {
    console.log("StoryIndexRoute");
    return this._super(params);
  }
});

App.StoryEditRoute = App.SingleStoryRoute.extend({
});

