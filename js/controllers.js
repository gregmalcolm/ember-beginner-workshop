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

App.ChoicesEditController = Ember.ArrayController.extend({
  actions: {
    remove: function(choice) {
      choice.deleteRecord();
      choice.save();
    }
  },
});


App.ChoiceAddController = Ember.ObjectController.extend({
  needs: ["editstory", "section-edit"],

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
  }.property("controllers.editstory.id"),

  createChoiceObject: function() {
    return this.get("store").createRecord('choice');
  }
});

