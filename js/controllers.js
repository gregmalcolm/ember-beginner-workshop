App.StoryController = Ember.ObjectController.extend({
});

App.StoriesEditController = App.StoryController.extend({
  actions: {
    save: function() {
      this.get("content").save().then(
        this.didSave.bind(this)
      );
    },

    cancel: function() {
      this.get("content").rollback();
      this.transitionToRoute("stories.show");
    }
  },

  didSave: function(story) {
    console.log("Story saved");
    this.transitionToRoute("stories.show");
  }
});
