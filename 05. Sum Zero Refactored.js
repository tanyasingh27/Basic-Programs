/*
  Write a function which accepts a sorted array of integers and finds the first pair where the sum is 0.
  Return an array that includes both valuesthat sum to zero or undefined if a pair does not exist.
*/
function sumZero(arr) {
    let leftPtr = 0;
    let rightPtr = arr.length - 1;
    while(leftPtr < rightPtr){
      let sum = arr[leftPtr] + arr[rightPtr] ;
      if(sum == 0){
        return [arr[leftPtr], arr[rightPtr]] ;
      }
      else if(sum > 0){
        rightPtr--;
      }
      else{
        leftPtr++;
      }
    }
  
    console.log("NO such pair found!");  
}

sumZero([-4,-3,-2,-1,0,5]);
sumZero([-4,-3,-2,-1,0,3,5]);

