const assert = require('assert');
const fib = (num) => {
    if(num < 2){
      return num;
    }
  
    return fib(num - 1) + fib(num - 2);
  }

const test = () =>{
    assert.deepStrictEqual(fib(1), 1);
    assert.deepStrictEqual(fib(9), 34);
}
test();
