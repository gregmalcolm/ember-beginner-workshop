App.SectionShowController = Ember.ObjectController.extend({
});


App.EditstoryController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      this.get("content").save().then(
        this.didSave.bind(this)
      );
    },

    cancel: function() {
      this.get("content").rollback();
      this.transitionToRoute("story.index");
    }
  },

  didSave: function(story) {
    console.log("Story saved");
    this.transitionToRoute("story.index");
  }
});
