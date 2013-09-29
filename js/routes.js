App.Router.map(function() {
  this.resource('stories', { path: '/stories' }, function() {
    this.route('new');
    this.resource('stories.view', { path: ':story_id'}, function() {
      this.route('section', { path: '/sections/:section_id' });
    });
    this.resource('stories.edit', { path: ':story_id/edit'}, function() {
      this.route('section', { path: '/sections/:section_id' });
    });
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function(params) {
    this.transitionTo("stories");
  }
});

App.StoriesIndexRoute = Ember.Route.extend({
  model: function(params) {
    return this.get("store").findAll("story");
  }
});

App.StoriesNewRoute = Ember.Route.extend({
  model: function(params) {
    story = this.get("store").createRecord("story");
    section = this.get("store").createRecord("section");
    story.set("first_section", section);
    return story;
  }
});

App.StoriesRoute = Ember.Route.extend({
  model: function(params) {
    model = this.get("store").find("story", params.story_id);
    return model;
  }
});

App.StoriesViewRoute = App.StoriesRoute.extend({
});


App.StoriesViewIndexRoute = Ember.Route.extend({
  model: function(params) {
    model = this.modelFor("stories.view");
    return model;
  }
});


App.StoriesEditRoute = App.StoriesRoute.extend({
});


App.StoriesEditIndexRoute = Ember.Route.extend({
  model: function(params) {
    model = this.modelFor("stories.edit");
    return model;
  }
});

