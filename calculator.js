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


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

  return {
    load,
    getTotal,
    add,
    subtract
  };

}

module.exports = calculatorModule;