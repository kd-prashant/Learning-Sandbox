// Arrays: Heterogenous, typeof Object, DynamicSize, Number to access its elements
let arr= [56,"hello", true, null, undefined, {name: "Denver", age: 34}];
console.log(arr);
console.log(typeof arr);


console.log(arr[3]);            //can't take -ve values
console.log(arr.at(-2));        //at can take -ve values 


let heaparr= new Array(8).fill(5);      //all the index are assigned with value 5;
console.log(heaparr)



// Shallow & Deep Copy
const manuplate= [23,1,45,23,56,76,49,23,90];
const deepCopy= manuplate;
console.log(manuplate == deepCopy);         //Both points to same array 

deepCopy[2]= 1000;
console.log(manuplate);
console.log(deepCopy);


const shallowCopy= structuredClone(manuplate);
console.log(manuplate == shallowCopy);

console.log();
shallowCopy[2]= -9999;
console.log(manuplate);
console.log(shallowCopy);




//Convert To String
console.log()
console.log(manuplate[8].toString());

let strArr= manuplate.toString();
console.log(strArr);
console.log(strArr[3]);




// Join : add the symbol inbetween elements (and convert the whole array into String)
console.log(manuplate.join(" + "));


console.log();
console.log(manuplate);
delete manuplate[4];
console.log(manuplate);



console.log(manuplate.length);

//  Unshift: add elements at Start and return Size/Lenghth of Array;
console.log(manuplate.unshift(103));
console.log(manuplate);


console.log();

//  Shift: remove first element at return That element 
console.log(manuplate.shift());



console.log(manuplate.includes(43));    //retun true/false

console.log(manuplate.lastIndexOf(23));





// Slice: extracts a section of an array    without Modifying Original Array    return New array    support -ve index
const newArr= manuplate.slice(3,8);
console.log(newArr);