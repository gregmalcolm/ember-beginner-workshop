App.StoryIndexController = Ember.ArrayController.extend({
  actions: {
    destroy: function(story) {
      story.deleteRecord();
      story.save();
    }
  }
});

App.StoryModifyController = Ember.ObjectController.extend({
  actions: {
    cancel: function() {
      this.get("content").rollback();
      this.transitionToRoute("story.index");
    }
  },

  didSave: function(story) {
    this.transitionToRoute("story.index");
  }
});

App.StoryEditController = App.StoryModifyController.extend({
  actions: {
    save: function() {
      this.get("content").save().then(
        this.didSave.bind(this)
      );
    }
  },

  didSave: function(story) {
    this.transitionToRoute("story.index");
  }
});

App.StoryNewController = App.StoryModifyController.extend({
  actions: {
    create: function() {
      this.get("content").save().then(
        this.didCreate.bind(this)
      );
    }
  },

  didCreate: function(story) {
    this.transitionToRoute("story.edit", story);
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
  needs: ["story-edit", "section-edit"],

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
    console.log("storySections");
    //TODO: Filter properly when we move over to RESTAdapter
    return this.get("store").find("section");
  }.property("controllers.story-edit.id"),

  createChoiceObject: function() {
    return this.get("store").createRecord('choice');
  }
});

