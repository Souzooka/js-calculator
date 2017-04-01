/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule() {
  var _total = 0;
  var _memory = 0;

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

  function load(num) {
    _total = num;
  }

  /**
   * Return the value of `total`
   * @return { Number }
   */

  function getTotal(num) {
    return _total;
  }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

  function add(num) {
    _total += num;
  }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

  function subtract(num) {
    _total -= num;
  }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

  function multiply(num) {
    _total *= num;
  }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

  function divide(num) {
    _total /= num;
  }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

  function recallMemory() {
    return _memory;
  }

  /**
   * Stores the value of `total` to `memory`
   */

  function saveMemory() {
    _memory = _total;
  }


  /**
   * Clear the value stored at `memory`
   */

  function clearMemory() {
    _memory = 0;
  }

  /**
   * Validation
   */

  return {
    load,
    getTotal,
    add,
    subtract,
    multiply,
    divide,
    recallMemory,
    saveMemory,
    clearMemory
  };

}

module.exports = calculatorModule;