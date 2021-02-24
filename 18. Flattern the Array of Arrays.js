function flatten(arr){
    let newArray = [];
    if(arr.length < 1) return newArray;
    newArray.push(arr[0]);
    newArray = newArray.concat(flatten(arr.slice(1)));
    return newArray;
   }
   
   console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
   console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
   console.log(flatten([[1],[2],[3]])); // [1,2,3]
   console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]