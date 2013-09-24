App.Router.map(function() {
  this.resource('stories', function() {
    this.route('new');
  });

  this.resource('story', { path: '/stories/:story_id' }, function() {
    this.route('section', { path: '/sections/:section_id' });
    this.resource('story.edit', { path: 'edit'}, function() {
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

App.StoryRoute = Ember.Route.extend({
  model: function(params) {
    model = this.get("store").find("story", params.story_id);
    console.log("Story Model=" + model);
    return model;
  }
});

App.StoryIndexRoute = Ember.Route.extend({
  model: function(params) {
    return this.modelFor("story");
  }
});

App.StoryEditRoute = App.StoryRoute.extend({
  model: function(params) {
    return this.modelFor("story");
  }
});


App.StoryEditIndexRoute = App.StoryIndexRoute.extend({
  model: function(params) {
    model = this.modelFor("story");
    return model;
  }
});

