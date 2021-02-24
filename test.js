function arrayManipulation(n, queries) {
    let arr = [];
     while(n>0){
        arr.push(0);
        n--;
      }
     queries = queries.join().split(',');
     let a=0,b=1,k=2;
     for(let i= +queries[a]-1; i< +queries[b];i++){
          arr[i]+= +queries[k];          
          if(i+1 >= +queries[b]){
            a= a+3;
            b= b+3;
            k= k+3;
            i = +queries[a]-2;
          }
              
     }
     
      arr.sort((a,b) => a-b);
      return arr[arr.length-1];
}
  
  
  
  let result = arrayManipulation(5, [[1,2,100],[2,5,100],[3,4,100]])