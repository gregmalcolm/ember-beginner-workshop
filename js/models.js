App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Story = DS.Model.extend({
  title: DS.attr('string'),
  //first_section: DS.belongsTo('section')
});


/*
App.Section = DS.Model.extend({
  seq: DS.attr('number'),
  synopsis: DS.attr('string'),
  text: DS.attr('string'),
  story: DS.belongsTo('story'),
  choices: DS.hasMany('choice', {async: true, inverse: 'section'})
});
*/

/*
App.Choice = DS.Model.extend({
  wording: DS.attr('string'),
  section: DS.belongsTo('section'),
  goes_to: DS.belongsTo('section')
});
*/
