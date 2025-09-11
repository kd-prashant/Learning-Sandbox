

// JS is JIT Compiled developed by Brendan Eich
// V8 engine


// Variable: var let const
    // var can be redeclare     and it will not loose it value until value inserted;
    //let const can't be redeclare;

var a= 90;
var a;      
console.log(a);




// const is immutable & we have to Initalized it at time of declaration ;
            //we can change the Element and Properties of const Array and Object;
const ab=90;
console.log(ab);
// ab= 109;    //Error
// console.log(ab);



// Identifier name can be start from _ $

let $hello= 45;
console.log($hello);

let _good= "String";
console.log(_good);




// at time of Declaration   Undefined is stored
let c;
console.log(c)




// if Number are in quote, then rest of number will be treated as strings and concatenated
        // + act as concatenation with string
        // - * / always act as Numerical operations
let ex= 5- 4-"45";
console.log(ex);




// 8 datatypes in JS
    //Null typeof is Object

    //JS store every Number as a 64b IEEE-754 (double): S1 E11 M52 

let num= 232;
let float= 234.24;

const aLie= true;

let str= "Hello JS World";

let bigNUM= 2342392810101n;

let intentional= null;
let notAssigned;

console.log( typeof num, " ", typeof  float, " ", typeof  aLie, " ", typeof  str, " ", typeof  bigNUM, " ", typeof  intentional, " ", typeof  notAssigned);




// Print in same line
process.stdout.write("Hello ");
process.stdout.write("Good \n");
process.stdout.write("Newline");





// Operators
console.log()

console.log(2**10);     //Power
console.log(9/4);       //Floating Point Division




// Loose and Strict Matching
console.log("Hello" == "Yello");
console.log("1234" == 1234);        //numeric string converted to Number        Non numeric string converted to NaN;

console.log("Hello" === "1234");

console.log(null == undefined);
console.log(NaN == NaN)


console.log(8>>2)           //  a/2^b
console.log(-8>>>10)        //  (2^32 + a) / 2^b

console.log("" == 0)        //Empty string is Coverted to 0
console.log("" == 434)        //false







// Ternary Operator
let x, y=89, z= 23;
x= 50>46? y : z;
console.log(x)

y= null;
let wx= y??z;
console.log(wx);




// Primitive Datatypes are stored in Stack; Fixed Size
// NonPrimitive Datatypes are stored in Heap: reference address is stored in Stack, 
//                                            but actual Object is stored in Heap; Dynamic Size


// let const are Block scope 
// var is Global scope
if(true){
    let block= 5;
    const scope= 9;
    var global= 10;
    console.log(block);
    console.log(scope);
    console.log(global);
}
console.log(global);
// console.log(block); //error
// console.log(scope); //error




// Type conversion
console.log(String(null));
let err= 3435;  
console.log(err.toString());    //error
