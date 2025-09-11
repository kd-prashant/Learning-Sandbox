

// Math in JS

let a= Math.sqrt(64);
console.log(a);
console.log(Math.LN10);



let num3= 234.56512;
console.log(Math.round(num3));      //return nearest integer to x
console.log(Math.ceil(num3));       //return next integer to x
console.log(Math.trunc(num3));      //integer part of x


console.log(Math.sign(78-234));         //for -ve number return -1      0 for zero      1 for positive number
console.log(Math.sign(90-90));
console.log(Math.sign(100+89));



console.log(Math.abs(-289.234));


console.log(83e4);
console.log(83e-3)


let num= 89.989723;
console.log(num.toFixed(3));            
console.log(typeof num.toFixed(5));            //Return String
console.log(typeof (num.toFixed(5) * 1));            //Converting String to Number



console.log()

console.log("Random Number generate: ", Math.floor(Math.random()));
console.log("Random Number generate upto [0,10): ", Math.floor(Math.random()*10));

console.log("Random Number generate upto [0,10]: ", Math.floor(Math.random()*11));

console.log("Random Number generate upto [5,10): ", Math.floor( Math.random()*(10-5) +5 ) );
console.log("Random Number generate upto [5,10]: ", Math.floor(Math.random()*(10-5+1)+5));

console.log()











