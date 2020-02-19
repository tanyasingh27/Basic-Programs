/*
 Write a function that accepts a sorted array, and counts the unique values in the array.
 there can be negative numbers in the array, but will always be sorted.
*/
function countUniqueValues(arr){
  if(arr.length == 0)
    return 0;
  let first = 0 ;
  let second = 1 ;
  while(second < arr.length){
      if(arr[first] != arr [second]){
          arr[++first] = arr[second] ;
      }
      second++;
  }
  return ++first ;
}