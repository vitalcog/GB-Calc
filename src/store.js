import { createStore } from 'redux';
import faker from 'faker';

// had trouble with "import" syntax, but this worked, figure this out later
const data = require('./data-generator/fakerFunctions');

const colorScheme = {
  red: '#d80000',
  gold: '#ebc600',
  vyLtGray: '#fcfcfc',
  ltGray: '#f7f7f7',
  mdGray: '#ededed',
  dkGray: '#dddddd',
}

function reducer(state, action) {
  // currently just an empty function
  return state;
}

export const store = createStore(reducer, {
  appColors: colorScheme,
  competitorName: faker.fake("{{company.companyName}}"),
  fakeData: data.generateFakeSavings(), // current values are: fakePrice, betterPrice, savings
})