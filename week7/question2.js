const assert = require('assert');

// Sorting an alist by descending order
const SpecialSort = (alist) => {
    alist.sort();
    return alist;
}

// const test = () =>{
//     SpecialSort([[1,]])
// }


console.log(SpecialSort([[1,2], [1,3], [3, 1], [4,1], [3, 2]]));