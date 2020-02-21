function sameFrequency(num1, num2){
    num1 = num1.toString();
    num2 = num2.toString();
    if(num1.length !== num2.length)
     return false;
    let freqCounter1 = {};
    for(let n of num1){
      freqCounter1[n] = ++freqCounter1[n] || 1;
    } 
    for(let n of num2){
      if(!freqCounter1[n]){
        return false;
      }
      freqCounter1[n]--;
    }
    return true;
  }
  
console.log(sameFrequency(182,281));
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578,5879385));
console.log(sameFrequency(22,222));