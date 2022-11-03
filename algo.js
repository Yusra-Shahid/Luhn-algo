const prompt = require("prompt-sync")({sigint: true});

let N= " ";
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
