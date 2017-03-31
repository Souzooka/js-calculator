// import dependencies e.g. chai and the calculator module
var chai = require('chai');
var calculator = require('../calculator.js');
// define two variables: `expect` and `should`.

var expect = chai.expect;
var should = chai.should;

// define a `describe` block. what are we testing? what should be name this suite? This is the "container" describe block.

describe('calculator module', () => {

  it('should be a function', () => {
    expect(calculator).to.be.a('function');
  });

  it('should return an object literal', () => {
    expect(calculator()).to.be.a('object');
  });

  /**
   * each method should have it's own `describe` block
   */

  // define a `describe` block to test the `load` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `getTotal` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `add` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `subtract` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `multiply` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `divide` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `recallMemory` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `saveMemory` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `clearMemory` method and all these tests go INSIDE of this describe

  /**
   * FINAL BOSS
   */

  // define a `describe` block to test the `validation` features of your methods and all these tests go INSIDE of this describe

});
