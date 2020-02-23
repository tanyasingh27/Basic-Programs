Console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55 

function recursiveRange(num){
    return (num == 0) ? 0 : num + recursiveRange(--num);
 }
 