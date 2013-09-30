App.StoriesEditController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      this.get("content").save();
    }
  },
});
