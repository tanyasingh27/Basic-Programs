function isSubsequence(str1, str2) {
    let firstPtr = 0;
    let secondPtr = 0;
    while(secondPtr < str2.length)
    {
      if(str1[firstPtr] == str2[secondPtr])
      { firstPtr++;
        if(firstPtr == str1.length){
          return true;
        }
      }
     secondPtr++;
    }
    return false;    
}
console.log(isSubsequence("abc","acb"));
console.log(isSubsequence("sing","sting"));
console.log(isSubsequence("hello","hello world"));
console.log(isSubsequence("abc","abracadabra"));

