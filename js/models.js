App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Story = DS.Model.extend({
  title: DS.attr('string'),
  first_chapter: DS.belongsTo('chapter')
});

App.Chapter = DS.Model.extend({
  seq: DS.attr('number'),
  text: DS.attr('string'),
  story: DS.belongsTo('story')
});

App.Story.FIXTURES = [
  {
    id: 100,
    title: 'Adventure!',
    first_chapter: 200
  },
  {
    id: 101,
    title: 'Zombies!',
    first_chapter: 201
  },
  {
    id: 102,
    title: 'Deathrace!',
    first_chapter: 202
  }
];

App.Chapter.FIXTURES = [
  {
    id: 200,
    text: "<p>Froggit sat dejectedly looking into his tankard. A small skirmish " +
          "broke out at the end of the tavern, but his heart just wasn't in it</p>",
    story: 100
  },
  {
    id: 201,
    text: "<p>Froggit gestured for the young woman to take a seat opposite next " +
          "to Bean.</p><p>\"How can we be of service?\"</p>",
    story: 100
  },
  {
    id: 210,
    title: 'Zombies!',
    text: "Daniella hit the bell one more time. She was just about turn and leave" +
          "when she heard a growling from behind the counter.",
    story: 101
  },
  {
    id: 220,
    title: 'Deathrace!',
    text: "As you spin around the corner and claim 8th place you spot a small" +
          "car with fungus shaped head popping out.",
    story: 102
  }
]
