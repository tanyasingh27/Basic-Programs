/*
  Write a function which accepts an array of integers and a number called "n" and calculate the
   maximun sum of n consecutive elements in the array.
*/
console.log(maxSubarraySum([1,2,5,2,8,1,5],2));   // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4));   // 17
console.log(maxSubarraySum([4,2,1,6,],1));        // 6
console.log(maxSubarraySum([4,2,1,6,2],4));       // 13
console.log(maxSubarraySum([],4));                //null
     

function maxSubarraySum(arr, n){
    if(n > arr.length){
        return null;
    }
    let tempSum =0;
    let maxSum = 0;
    for (let i = 0 ; i < n ; i++){
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let j = n; j < arr.length ; j++)
    {
       tempSum = tempSum - arr[j-n] + arr[j];
       maxSum = Math.max(maxSum , tempSum);
    }
    return maxSum;
}