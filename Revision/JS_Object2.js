

const u1 = { uName: "Denver", uAge: 23, uMale: true, 1247: "Digital Logic" };
const u2 = { uName: "Walter", uAge: 63, uMale: true, 1247: "Digital Logic" };
const u3 = { uName: "Crytsa", uAge: 33, uMale: false, 1247: "Digital Logic" };
const u4 = { uName: "Skyler", uAge: 53, uMale: true, 1247: "Digital Logic" };






//Spread:  Copies all properties from u1 and u2 into u5
    // If both u1 and u2 have the same property name (e.g., uName), 
    // the value from u2 overwrites the value from u1 in the new object.
let u5= {...u1, ...u2};     //Shallow Copy
console.log(u5);



let arrN= [1,3,5,7,2,4,7,8,6];  
let copyingN= [...arrN];            //Same we can do with Objects
console.log()   
console.log(arrN)
console.log(copyingN)
console.log(copyingN == arrN)
console.log()


let consumer= "HELLO";
let iterable= [...consumer];
console.log(iterable);
console.log()





console.log(u1);

Object.freeze(u1);          //Immutable Object: Can't Add, Delete, or Modify
u1['uAge']= 67;
console.log(u1);


console.log(u2);
u2["Old"]= "I am Old here";  

Object.seal(u2);            //Prevents Structural Changes: Can't Add, Delete,   but can Modify 
u2[1247]= "Already Minimized";
u2["New"]= "I am new here";   
console.log(u2);    







//Rest:  Collect remaining elements into an array,
const arrM= [1,2,3,4,5,6,7,8];
const [one, two, ...restOPR]= arrM;
console.log(one);
console.log(two);
console.log(restOPR);





// Destructuring
const [first= 90, ,third, ,fourth]= arrM;           //default value if undefined
console.log();
console.log(first);
console.log(third);
console.log(fourth);


//Swapping using destrucring;
let a1= "Good";
let a2= "Morning"
console.log();
console.log(a1,a2);
[a1, a2]= [a2, a1];
console.log(a1,a2);
console.log();



let client= {
    id: 23293,
    cName: "Packet",
    cDF: true,
    cSERV: "Minimum Cost" 
}
let {id, cDF}= client;            //Extracting using Keys
console.log(id);
console.log(cDF);
console.log();

let {cName:fName, cSERV:type}= client;            //Aliasing;
console.log(fName);
console.log(type);

console.log(); 
console.log(client)
fName= "Datagram";
console.log(fName);
console.log(client)