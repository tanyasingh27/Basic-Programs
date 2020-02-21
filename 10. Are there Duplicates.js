function areThereDuplicates(...args) {
    let l = 0 ;
    let r = 1 ;
    while(l<args.length-1){
     if(r == args.length){
       l++;
       r= l+1;
      }
     if(args[l] == args[r]){
       return true;
      }
     r++;   
    }
   return false;
  }
  
  console.log(areThereDuplicates(1,2,3));
  console.log(areThereDuplicates(1,2,2));
  console.log(areThereDuplicates('a','b','c','a'));