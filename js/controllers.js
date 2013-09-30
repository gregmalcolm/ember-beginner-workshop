App.StoriesEditController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      this.get("content").save();
    },
    cancel: function() {
      this.get("content").rollback();
      this.transitionToRoute("stories.index");
    }
  },
});
