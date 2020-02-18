/*  
 Write a function which accepts 2 arrays and returns true if every element in the array has its corresponding element
 squared in the other array. The frequency also must be same
*/


function sameSquared(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCountOfarr1 = {}
    let frequencyCountOfarr2 = {}
    for(let val of arr1){
        frequencyCountOfarr1[val] = (frequencyCountOfarr1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCountOfarr2[val] = (frequencyCountOfarr2[val] || 0) + 1        
    }
    console.log(frequencyCountOfarr1);
    console.log(frequencyCountOfarr2);
    for(let key in frequencyCountOfarr1){
        if(!(key ** 2 in frequencyCountOfarr2)){
            return false
        }
        if(frequencyCountOfarr2[key ** 2] !== frequencyCountOfarr1[key]){
            return false
        }
    }
    return true
}

console.log(sameSquared([1,2,3,2,5], [9,1,4,4,11]));
