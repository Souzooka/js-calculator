// import dependencies e.g. chai and the calculator module
var chai = require('chai');
var calculator = require('../calculator.js');
var calculatorObj = require('../calculator.js')();
// define two variables: `expect` and `should`.

var expect = chai.expect;
var should = chai.should;

// define a `describe` block. what are we testing? what should be name this suite? This is the "container" describe block.

describe('calculatorModule', () => {

  it('should be a function', () => {
    expect(calculator).to.be.a('function');
  });

  it('should return an object literal', () => {
    expect(calculatorObj).to.be.a('object');
  });

  it('should not return private variables', () => {
    expect(calculatorObj).to.have.not.ownProperty('_memory');
    expect(calculatorObj).to.have.not.ownProperty('_total');
    expect(calculatorObj).to.have.not.ownProperty('memory');
    expect(calculatorObj).to.have.not.ownProperty('total');
  });

  /**
   * each method should have it's own `describe` block
   */

  // define a `describe` block to test the `load` method and all these tests go INSIDE of this describe

  describe('load method', () => {

    it ('should be returned by calculatorModule', () => {
      expect(calculatorObj).to.have.ownProperty('load');
    });

    it ('should be a method', () => {
      expect(calculatorObj.load).to.be.a('function');
    });

  });

  // define a `describe` block to test the `getTotal` method and all these tests go INSIDE of this describe

  describe('getTotal method', () => {

    it ('should be returned by calculatorModule', () => {
      expect(calculatorObj).to.have.ownProperty('getTotal');
    });

    it ('should be a method', () => {
      expect(calculatorObj.getTotal).to.be.a('function');
    });

  });

  // define a `describe` block to test the `add` method and all these tests go INSIDE of this describe

  describe('add method', () => {

    it ('should be returned by calculatorModule', () => {
      expect(calculatorObj).to.have.ownProperty('add');
    });

    it ('should be a method', () => {
      expect(calculatorObj.add).to.be.a('function');
    });

  });

  // define a `describe` block to test the `subtract` method and all these tests go INSIDE of this describe

  describe('subtract method', () => {

    it ('should be returned by calculatorModule', () => {
      expect(calculatorObj).to.have.ownProperty('subtract');
    });

    it ('should be a method', () => {
      expect(calculatorObj.subtract).to.be.a('function');
    });

  });

  // define a `describe` block to test the `multiply` method and all these tests go INSIDE of this describe

  describe('multiply method', () => {

    it ('should be returned by calculatorModule', () => {
      expect(calculatorObj).to.have.ownProperty('multiply');
    });

    it ('should be a method', () => {
      expect(calculatorObj.multiply).to.be.a('function');
    });

  });

  // define a `describe` block to test the `divide` method and all these tests go INSIDE of this describe

  describe('divide method', () => {

    it ('should be returned by calculatorModule', () => {
      expect(calculatorObj).to.have.ownProperty('divide');
    });

    it ('should be a method', () => {
      expect(calculatorObj.divide).to.be.a('function');
    });

  });

  // define a `describe` block to test the `recallMemory` method and all these tests go INSIDE of this describe

  describe('recallMemory method', () => {

    it ('should be returned by calculatorModule', () => {
      expect(calculatorObj).to.have.ownProperty('recallMemory');
    });

    it ('should be a method', () => {
      expect(calculatorObj.recallMemory).to.be.a('function');
    });

  });

  // define a `describe` block to test the `saveMemory` method and all these tests go INSIDE of this describe

  describe('saveMemory method', () => {

    it ('should be returned by calculatorModule', () => {
      expect(calculatorObj).to.have.ownProperty('saveMemory');
    });

    it ('should be a method', () => {
      expect(calculatorObj.saveMemory).to.be.a('function');
    });

  });

  // define a `describe` block to test the `clearMemory` method and all these tests go INSIDE of this describe

  describe('clearMemory method', () => {

    it ('should be returned by calculatorModule', () => {
      expect(calculatorObj).to.have.ownProperty('clearMemory');
    });

    it ('should be a method', () => {
      expect(calculatorObj.clearMemory).to.be.a('function');
    });

  });

  /**
   * FINAL BOSS
   */

  // define a `describe` block to test the `validation` features of your methods and all these tests go INSIDE of this describe

});
