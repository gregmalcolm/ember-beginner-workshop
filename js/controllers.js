App.StoriesModifyController = Ember.ObjectController.extend({
  actions: {
    cancel: function() {
      this.get("content").rollback();
      this.transitionToRoute("stories.index");
    }
  },
});

App.StoriesEditController = App.StoriesModifyController.extend({
  actions: {
    save: function() {
      this.get("content").save().then(
        this.didSave.bind(this)
      );
    }
  },

  didSave: function(story) {
    this.transitionToRoute("stories.show");
  }
});

App.StoriesNewController = App.StoriesModifyController.extend({
  actions: {
    create: function() {
      this.get("content").save().then(
        this.didCreate.bind(this)
      );
    }
  },

  didCreate: function(story) {
    this.transitionToRoute("stories.edit", story);
  }
});
