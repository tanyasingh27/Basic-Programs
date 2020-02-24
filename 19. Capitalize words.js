function capitalizeWords (arr) {
    let newArr = [];
    if(arr.length < 1){
      return newArr;
    }
    let word = arr[0].toUpperCase();
    newArr.push(word);
    newArr = newArr.concat(capitalizeWords(arr.slice(1)));
    return newArr;
  }
  
  let words = ['i', 'am', 'learning', 'recursion'];
  let word2 = capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
  for(let word of word2)
    console.log(word);