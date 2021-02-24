const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])
function collectStrings(obj){
  let arr = [];
  for(let a of Object.values(obj)){
    if(typeof(a) =="string")
     arr.push(a);
    else
      collectStrings(a);
    arr = arr.concat(a); 
   }   
}