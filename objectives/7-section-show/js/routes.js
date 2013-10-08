App.Router.map(function() {
  this.resource('stories', function() {
    this.route('new');
    this.resource('stories.show', { path: ':story_id'}, function() {
      this.route('sections', { path: '/sections/:section_id' });
    });
    this.route('edit', { path: ':story_id/edit'});
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function(params) {
    this.transitionTo("stories");
  }
});

App.StoriesIndexRoute = Ember.Route.extend({
  model: function() {
    return this.get("store").findAll("story");
  }
});

App.StoriesBaseRoute = Ember.Route.extend({
  model: function(params) {
    return this.get("store").find('story', params.story_id);
  }
});
App.StoriesShowRoute = App.StoriesBaseRoute.extend();
App.StoriesEditRoute = App.StoriesBaseRoute.extend();

App.StoriesNewRoute = Ember.Route.extend({
  model: function(params) {
    return this.get("store").createRecord("story");
  }
});

App.StoriesShowIndexRoute = Ember.Route.extend({
  model: function(params) {
    model = this.modelFor("stories.show");
    return model;
  }
});

