App.Router.map(function() {
  this.resource('stories', function() {
    this.route('new');
    this.resource('stories.show', { path: ':story_id'}, function() {
      this.route('sections', { path: '/sections/:section_id' });
    });
    this.resource('stories.edit', { path: ':story_id/edit'}, function() {
      this.route('sections', { path: '/sections/:section_id' });
    });
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
    story = this.get("store").createRecord("story");
    section = this.get("store").createRecord("section");
    story.set("first_section", section);
    return story;
  }
});

App.StoriesShowBaseRoute = Ember.Route.extend({
  model: function(params) {
    return this.modelFor("stories.show");
  }
});
App.StoriesShowIndexRoute    = App.StoriesShowBaseRoute.extend({});
App.StoriesShowSectionsRoute = App.StoriesShowBaseRoute.extend({
  model: function(params) {
    this._super(params);
    return this.store.find('section', params.section_id);
  }
});

App.StoriesEditIndexRoute = Ember.Route.extend({
  model: function(params) {
    return this.modelFor("stories.edit");
  }
});

