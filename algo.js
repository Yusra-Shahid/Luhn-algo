const prompt = require("prompt-sync")({sigint: true});

let N= " ";
dash=0;
N =prompt("Number : ");
numberOdd='';
numberEven='';
odds=0;
evens=0;
sumOdd=0;
sumEven=0;
TotalSum=0;


if (N.length==16){
    console.log("master card")
}
else if (N.length==13){
    console.log("visa card")
}
else if(N.length==15){
    console.log("American card")
}
for(i=0; i<N.length;i++)
{
    charCode = N[i].charCodeAt();
    if (charCode == 45)
    console.log(" Your card is invalid");  
    }
    for(i=0;i<N.length;i += 2){
        odds = N[i] * 2;
        if(odds>9){
            odds -= 9;
        }
        numberOdd += odds;
        sumOdd += odds;
    }
    //console.log(numberOdd);
    //console.log(sumOdd);
    
    for(i=1;i<N.length;i+= 2){
        evens = parseInt(N[i]);
        numberEven += evens;
        sumEven += evens;
    }
    //console.log(numberEven);
    //console.log(sumEven);
    TotalSum = sumOdd + sumEven;
    console.log(TotalSum);
    if((TotalSum % 10) == 0){
            console.log(" Valid Number")
        }
        else{
            console.log(" Invalid Number")
        }

