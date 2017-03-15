/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = (function(){

  var memory = 0;
  var total = 0;

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

  function _isNumber(testValue) {
    if (typeof testValue === "number") {
      return true;
    }
    else if (typeof testValue !== "number") {
      throw new Error("Only numbers can be loaded into memory.");
    }
  }

  function load(newTotal) {
    if (_isNumber(newTotal)) {
      total = newTotal;
    }

    return total;
  }

  /**
   * Return the value of `total`
   * @return { Number }
   */

  function getTotal() {
    return total;
  }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

  function add(operand) {
    if (_isNumber(operand)) {
      total += operand;
    }
  }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

  function subtract(operand) {
    if (_isNumber(operand)) {
      total -= operand;
    }
  }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

  function multiply(operand) {
    if (_isNumber(operand)) {
      total *= operand;
    }
  }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

  function divide(operand) {
    if (_isNumber(operand)) {
      total /= operand;
    }
  }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

  function recallMemory() {
    return memory;
  }

  /**
   * Stores the value of `total` to `memory`
   */

  function saveMemory() {
    memory = total;
  }

  /**
   * Clear the value stored at `memory`
   */

  function clearMemory() {
    memory = 0;
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


});

