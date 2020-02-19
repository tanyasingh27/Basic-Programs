function validAnagram(string1, string2){
   if(string1.length !== string2.length){
        return false;
   }
   let frequencyCounter = {};
   
   for(let char of string1){
    frequencyCounter[char] = ++frequencyCounter[char] || 1;
   }
   
   for(let i = 0; i < string2.length; i++)
   { let key = string2[i];
     if(!(frequencyCounter[key]))
      return false;
     frequencyCounter[key]--;
    }
  return true;
}
console.log(validAnagram("rat","tar"));