const search = (arr, item) =>{
    for(let i of arr){
        if (i === item){
            return true;
        }
    }
    return false;
}
