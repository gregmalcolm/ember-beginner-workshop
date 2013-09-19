App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Story = DS.Model.extend({
  title: DS.attr('string')
});

App.Story.FIXTURES = [
  {
    id: 101,
    title: 'Winging it in Ember'
  },
  {
    id: 102,
    title: 'Zombies!'
  }
];

