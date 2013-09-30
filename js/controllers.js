App.StoriesEditController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      this.get("content").save().then(
        this.didSave.bind(this)
      );
    },
    cancel: function() {
      this.get("content").rollback();
      this.transitionToRoute("stories.view");
    }
  },

  didSave: function(story) {
    this.transitionToRoute("stories.view");
  }
});
