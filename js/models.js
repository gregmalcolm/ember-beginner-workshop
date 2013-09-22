App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Story = DS.Model.extend({
  title: DS.attr('string'),
  first_section: DS.belongsTo('section')
});

App.Section = DS.Model.extend({
  seq: DS.attr('number'),
  synopsis: DS.attr('string'),
  text: DS.attr('string'),
  story: DS.belongsTo('story'),
  choices: DS.hasMany('choice')
});

App.Choice = DS.Model.extend({
  wording: DS.attr('string'),
  section: DS.belongsTo('section')
});

App.Story.FIXTURES = [
  {
    id: 100,
    title: 'Temple Quest',
    first_section: 2000
  },
  {
    id: 101,
    title: 'Adventure!',
    first_section: 2100
  },
  {
    id: 102,
    title: 'Zombies!',
    first_section: 2200
  },
  {
    id: 103,
    title: 'Deathrace!',
    first_section: 2300
  }
];

App.Section.FIXTURES = [
  {
    id: 2000,
    synopsis: "Intro",
    text: "It is a lovely summers day. While lying on your back watching " +
          "clouds you notice a small dark dot in the sky above you.",
    story: 100,
    choices: [3000, 3001, 3002]
  },
  {
    id: 2010,
    synopsis: "Die straight away",
    text: "You slip back into delightful dream about bacon xylophones. And " +
          "know no more. You are dead.",
    story: 100
  },
  {
    id: 2011,
    synopsis: "It's getting bigger",
    text: "You frown at the sky for a few moments trying to work out what it " +
          "is.\nNo idea, but seems to be getting bigger",
    story: 100
  },
  {
    id: 2012,
    synopsis: "It's still there",
    text: "You get up and start heading back to your car. As you putting the " +
          "keys in the lock you can't help noticing that it's getting bigger",
    story: 100
  },
  {
    id: 2102,
    synopsis: "Tavern - Intro",
    text: "Froggit sat dejectedly looking into his tankard. A small skirmish " +
          "broke out at the end of the tavern, but his heart just wasn't in it",
    story: 101
  },
  {
    id: 2110,
    synopsis: "Tavern - Invite stranger to sit down",
    text: "Froggit gestured for the young woman to take a seat opposite next " +
          "to Bean.\n\n\"How can we be of service?\"",
    story: 101
  },
  {
    id: 2200,
    synopsis: 'Intro',
    title: 'Zombies!',
    text: "Daniella hit the bell one more time. She was just about turn and " +
          "leave when she heard a growling from behind the counter.",
    story: 102
  },
  {
    id: 2300,
    synopsis: 'Intro',
    title: 'Deathrace!',
    text: "As you spin around the corner and claim 8th place you spot a small" +
          "car with fungus shaped head popping out.",
    story: 103
  }
]

App.Choice.FIXTURES = [
  {
      id: 3000,
      wording: "Go back to sleep",
      section: 2010
  },
  {
      id: 3001,
      wording: "Keep staring at it",
      section: 2011
  },
  {
      id: 3002,
      wording: "Head home",
      section: 2012
  }
];
