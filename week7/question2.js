const assert = require('assert');

function alistCom(a, b){
    return (10000000 * a[0] + a[1]) -  (10000000 * b[0] + b[1])
}
// Sorting an alist by descending order
const SpecialSort = (alist) => {
    alist.sort(alistCom);
    return alist;
}

const test = () =>{
    let alist = SpecialSort([[1,2], [1,3], [3, 1], [4,1], [3, 2]]); 
    assert.deepStrictEqual([ [ 1, 2 ], [ 1, 3 ], [ 3, 1 ], [ 3, 2 ], [ 4, 1 ] ]);
}

test();