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

  function load(newTotal) {
    if (typeof newTotal === "number") {
      total = newTotal;
    }
    else if (typeof newTotal !== "number") {
      throw new Error("Only numbers can be loaded into memory.");
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
    if (typeof operand === "number") {
      total += operand;
    }
    else if (typeof operand !== "number") {
      throw new Error("Only numbers can be loaded into memory.");
    }
  }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  function subtract(operand) {
    if (typeof operand === "number") {
      total -= operand;
    }
    else if (typeof operand !== "number") {
      throw new Error("Only numbers can be loaded into memory.");
    }
  }


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

  function multiply(operand) {
    if (typeof operand === "number") {
      total *= operand;
    }
    else if (typeof operand !== "number") {
      throw new Error("Only numbers can be loaded into memory.");
    }
  }


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

  function divide(operand) {
    if (typeof operand === "number") {
      total /= operand;
    }
    else if (typeof operand !== "number") {
      throw new Error("Only numbers can be loaded into memory.");
    }
  }


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
    subtract,
    multiply,
    divide

  };


});

