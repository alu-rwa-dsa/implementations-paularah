function checkTree(arr){
    if (arr.length === 0) return undefined;
    if (typeof arr[0] !== "number") return undefined;
    if (!Array.isArray(arr[1])) return undefined;
    for(let i of arr){
        checkTree(arr.splice(1));
    }
}

checkTree([3,[1],[2,[1],[3]]])