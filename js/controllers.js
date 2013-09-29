App.StoriesIndexController = Ember.ArrayController.extend({
  actions: {
    destroy: function(story) {
      story.deleteRecord();
      story.save();
    }
  }
});

App.StoriesModifyController = Ember.ObjectController.extend({
  actions: {
    cancel: function() {
      this.get("content").rollback();
      this.transitionToRoute("stories.index");
    }
  },

  didSave: function(story) {
    this.transitionToRoute("stories.index");
  }
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
    this.transitionToRoute("stories.index");
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


App.ChoicesEditController = Ember.ArrayController.extend({
  actions: {
    remove: function(choice) {
      choice.deleteRecord();
      choice.save().then(this.didRemove.bind(this), this.didRejectRemove.bind(this));
    }
  },
  didRemove: function(choice) {
    choices = this.get("content")
    choices.removeObject(choice)
  },
  didRejectRemove: function(reason) {
    console.error("Failed to remove item", reason);
  }
});


App.ChoiceAddController = Ember.ObjectController.extend({
  needs: ["stories-edit", "section-edit"],

  content: function() {
    return this.createChoiceObject();
  }.property(),

  actions: {
    add: function() {
      choice = this.get("content");
      this.get("controllers.section-edit.choices").pushObject(choice);
      choice.save();
      this.set("content", this.createChoiceObject());
    }
  },

  storySections: function() {
    //TODO: Filter properly when we move over to RESTAdapter
    return this.get("store").find("section");
  }.property("controllers.stories-edit.id"),

  createChoiceObject: function() {
    return this.get("store").createRecord('choice');
  }
});

