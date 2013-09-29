App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['Temple Quest', 'Adventure!', 'Zombies', 'Death Race!'];
  }
});
