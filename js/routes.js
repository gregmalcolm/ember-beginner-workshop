App.Router.map(function() {
  this.resource('story', { path: '/stories' }, function() {
    this.route('new');
    this.resource('story.view', { path: ':story_id'}, function() {
      this.route('section', { path: '/sections/:section_id' });
    });
    this.resource('story.edit', { path: ':story_id/edit'}, function() {
      this.route('section', { path: '/sections/:section_id' });
    });
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function(params) {
    this.transitionTo("story");
  }
});

App.StoryIndexRoute = Ember.Route.extend({
  model: function(params) {
    return this.get("store").findAll("story");
  }
});

App.StoryNewRoute = Ember.Route.extend({
  model: function(params) {
    return this.get("store").createRecord("story");
  }
});

App.StoryRoute = Ember.Route.extend({
  model: function(params) {
    model = this.get("store").find("story", params.story_id);
    return model;
  }
});

App.StoryViewRoute = App.StoryRoute.extend({
});


App.StoryViewIndexRoute = Ember.Route.extend({
  model: function(params) {
    model = this.modelFor("story.view");
    return model;
  }
});


App.StoryEditRoute = App.StoryRoute.extend({
});


App.StoryEditIndexRoute = Ember.Route.extend({
  model: function(params) {
    model = this.modelFor("story.edit");
    return model;
  }
});

