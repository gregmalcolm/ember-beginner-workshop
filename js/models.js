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
  choices: DS.hasMany('choice', {async: true, inverse: 'section'})
});

App.Choice = DS.Model.extend({
  wording: DS.attr('string'),
  section: DS.belongsTo('section'),
  goes_to: DS.belongsTo('section')
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
    story: 100,
  },
  {
    id: 2011,
    synopsis: "It's getting bigger",
    text: "You frown at the sky for a few moments trying to work out what it " +
          "is?\nAbsolutely no idea, but seems to be getting bigger",
    story: 100,
    choices: [3000, 3003, 3002]
  },
  {
    id: 2012,
    synopsis: "It's rectangular",
    text: "You frown up at the sky some more. You can now see that it looks vaguely rectangular",
    story: 100,
    choices: [3000, 3004, 3002]
  },
  {
    id: 2013,
    synopsis: "It's getting even bigger",
    text: "Yep, the shape in the sky is definietly getting bigger",
    story: 100,
    choices: [3000, 3005, 3002]
  },
  {
    id: 2014,
    synopsis: "It's blotting out the light",
    text: "This thing is starting to cast a shadow.",
    story: 100,
    choices: [3000, 3006, 3002]
  },
  {
    id: 2015,
    synopsis: "It looks like some kind of stone structure",
    text: "It looks like it's made of stone",
    story: 100,
    choices: [3000, 3007, 3002]
  },
  {
    id: 2016,
    synopsis: "It's getting pretty dark",
    text: "It looks like some kind of falling building. You should probably get out of the way",
    story: 100,
    choices: [3000, 3008, 3002]
  },
  {
    id: 2017,
    synopsis: "It's getting really dark",
    text: "It's getting really dark now. You really should run!",
    story: 100,
    choices: [3000, 3009, 3002]
  },
  {
    id: 2018,
    synopsis: "I should have moved",
    text: "You have been squashed by a falling temple. Nice try bozo!",
    story: 100,
  },
  {
    id: 2020,
    synopsis: "Heading out to the car",
    text: "Eh, I haven't written this one yet. So you trip over your own shoelace and die.",
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
      goes_to: 2010
  },
  {
      id: 3001,
      wording: "Keep staring at it",
      goes_to: 2011
  },
  {
      id: 3003,
      wording: "Stare at it some more",
      goes_to: 2012
  },
  {
      id: 3004,
      wording: "Keep staring at it",
      goes_to: 2013
  },
  {
      id: 3005,
      wording: "Stare at it some more",
      goes_to: 2014
  },
  {
      id: 3006,
      wording: "Keep staring at it",
      goes_to: 2015
  },
  {
      id: 3007,
      wording: "Stare at it some more",
      goes_to: 2016
  },
  {
      id: 3008,
      wording: "Keep staring at it",
      goes_to: 2017
  },
  {
      id: 3009,
      wording: "Stare at it some more",
      goes_to: 2018
  },
  {
      id: 3002,
      wording: "Head home",
      goes_to: 2020
  }];
