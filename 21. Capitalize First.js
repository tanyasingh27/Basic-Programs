function capitalizeFirst (arr) {
    let newArr=[];
    if(arr.length===0) return newArr;
    let str = arr[0].slice(0,1).toUpperCase() + arr[0].slice(1);
    newArr.push(str);
    newArr = newArr.concat(capitalizeFirst (arr.slice(1)));
    return newArr;
   }
   
   let arr1 = capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
   for (let a of arr1)
     console.log(a); 
   