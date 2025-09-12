
// Date:    typeof Object   static      
            // Browser Time Zone and display as Full text string;
            // store time in Miliseconds from 1 Jan 1970

let today= new Date();
console.log(today);


//
let dateSTR= new Date().toString();
console.log(dateSTR);

console.log(dateSTR.toString());

console.log(today.getDate());


let userDefined= new Date("2024-11-16");
console.log(userDefined.getMonth());

userDefined.setFullYear(2024, 9, 1);
userDefined.setHours(13,23,44);
console.log(userDefined.getMonth());
console.log(userDefined);

console.log(today.getTime());

