const prompt = require("prompt-sync")({sigint: true});
let ifEvenDouble = 0
let N= " ";
j=0;
N =prompt("Number : ");

if (N.length==16){
    console.log("master card")
}
else if (N.length==13){
    console.log("visa card")
}
else if(N.length==15){
    console.log("American card")
}
for(i=0 ;i=N.length-1; i--){
   //var digit=N.charAt(i);
   //j= parseInt(digit,10) 
}
if(totalSum % 10 === 0){
    console.log('Valid');
    return true;
  } else {
    console.log('Invalid');
    return false;
  }
// if((ifEvenDouble % 2) === 0){
//     let doubled = arr[i] * 2;
// }
console.log(j)
// function is_alphaDash(N)
// {
//  regexp = /^\d{1,3}$/;
  
//         if (regexp.test(N))
//           {
//             return false;
//           }
//         else
//           {
//             return true;
//           }
// }



// console.log(is_alphaDash(''));
