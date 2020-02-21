function averagePair(arr,avg){
    if(arr.length === 0){
      return false;
    }
    let leftPtr =0;
    let rightPtr = arr.length -1;
    let tempavg ;
    while(leftPtr < rightPtr){
        tempavg = (arr[leftPtr] + arr[rightPtr])/2;
        if(tempavg == avg){
         return true;
         }
        else if(tempavg > avg)
          rightPtr--;
        else    
        leftPtr++;
    }
    return false ;
}
  console.log(averagePair([1,2,3],2.5));   //true;
  console.log(averagePair([],5));  //false
  console.log(averagePair([-1,0,3,4,5,6],4.1));  //false