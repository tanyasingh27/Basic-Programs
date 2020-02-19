/*
  Write a function which accepts a sorted array of integers and finds the first pair where the sum is 0.
  Return an array that includes both valuesthat sum to zero or undefined if a pair does not exist.
*/
function sumZero(arr) {
    for (let i =0; i< arr.length; i++){
        for(let j =i+1; j< arr.length; j++){
            if(arr[i]+arr[j] == 0){
                return [arr[i], arr[j]];
            }
        }
    }
    console.log("NO such pair found!");
}

sumZero([-4,-3,-2,-1,0,5]);