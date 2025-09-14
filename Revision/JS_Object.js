
// Object       key:values pair     each key has a value, 

let obj= {
    key1: 23,
    "key2": true,

    10: {
        user: "Revising",
        fun: function (){
            console.log(obj[10].user," Object");
            return "Hello Object of Object of Function";
        }
    },

    true: [34,12,true,{1:2, 4:5, 10:12}]
}
console.log(Object.keys(obj));              //Return Array
console.log(Object.entries(obj))

let valueArr= Object.values(obj);
console.log(valueArr);

console.log(Array.isArray(valueArr));
valueArr[0].fun();


console.log(valueArr[3].at(3))
console.log();
console.log();

console.log(obj[10].fun());



// Class
class objStruct{
    constructor(a, b, c){
        this.userName= a;
        this.userAge= b;
        this.userGender= c;
    }
}
let user1= new objStruct("Denver", 67, "Male");
console.log(user1);




// 
let objAssign={};
Object.assign(objAssign, obj,user1);
console.log(objAssign);
