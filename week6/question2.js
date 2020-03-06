const assert = require('assert');

const gcd = (num1, num2) => {
    if(num2 === 0) return num1;
    return gcd(num2, num1 % num2);
 }

 const test = () =>{
     assert.deepStrictEqual(gcd(10, 15), 5);
 }
 test();