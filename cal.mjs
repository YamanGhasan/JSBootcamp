const PI = 3.14159;

function pow(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  }

  
  export function sqrt(number) {
    /* 💡 We don't care about the implementation here */
  }
  
  function circleArea(radius) {
    return PI * pow(radius, 2);
  }
  
  function circleCircumference(radius) {
    /* 💡 We don't care about the implementation here */
  }
  
  function squareArea(radius) {
    /* 💡 We don't care about the implementation here */
  }
  
  function squareCircumference(radius) {
    /* 💡 We don't care about the implementation here */
  }