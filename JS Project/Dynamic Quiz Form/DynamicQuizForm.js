



// Storing all these Question Option Correct Answer 
// Storing Questions
// Storing Options
// Storing Correct Answer

let ques1 = {
  question: "Which keyword has block scope in JavaScript?",
  options: ["var", "let", "const", "Both let and const"],
  answer: "Both let and const"
};

let ques2 = {
  question: "Which variables are hoisted in JavaScript?",
  options: ["Only let", "Only var", "Only const", "All (var, let, const)"],
  answer: "All (var, let, const)"
};

let ques3 = {
  question: "What is a closure in JavaScript?",
  options: [
    "A function bundled with its lexical environment",
    "A block scope",
    "A loop inside a function",
    "An async callback"
  ],
  answer: "A function bundled with its lexical environment"
};

let ques4 = {
  question: "Callback hell occurs due to:",
  options: [
    "Nested synchronous loops",
    "Nested callbacks in async functions",
    "Improper use of promises",
    "Blocking code execution"
  ],
  answer: "Nested callbacks in async functions"
};

let ques5 = {
  question: "Synchronous code in JS is executed:",
  options: [
    "Line by line in order",
    "All at once",
    "Randomly",
    "After async tasks"
  ],
  answer: "Line by line in order"
};

let ques6 = {
  question: "In JavaScript, 'this' inside a regular function refers to:",
  options: [
    "The window/global object (non-strict mode)",
    "Always the current function",
    "The parent scope",
    "The passed argument"
  ],
  answer: "The window/global object (non-strict mode)"
};

let ques7 = {
  question: "Which method creates a resolved Promise?",
  options: ["Promise.create()", "Promise.new()", "Promise.resolve()", "Promise.call()"],
  answer: "Promise.resolve()"
};

let ques8 = {
  question: "All functions in JavaScript inherit from:",
  options: ["Function.prototype", "Object.prototype", "Array.prototype", "Window"],
  answer: "Function.prototype"
};

let ques9 = {
  question: "Which method allows passing arguments as an array?",
  options: ["call()", "apply()", "bind()", "invoke()"],
  answer: "apply()"
};

let ques10 = {
  question: "Polyfill for bind() can be written using:",
  options: ["apply()", "call()", "Both call() and apply()", "setTimeout()"],
  answer: "Both call() and apply()"
};

let ques11 = {
  question: "Currying transforms a function with multiple arguments into:",
  options: [
    "A function that takes one argument at a time",
    "A recursive function",
    "A function returning a promise",
    "An async function"
  ],
  answer: "A function that takes one argument at a time"
};

let ques12 = {
  question: "Difference between localStorage and sessionStorage?",
  options: [
    "localStorage persists until cleared, sessionStorage lasts per session",
    "Both last forever",
    "Both expire when browser closes",
    "localStorage is secure, sessionStorage is not"
  ],
  answer: "localStorage persists until cleared, sessionStorage lasts per session"
};

let ques13 = {
  question: "CORS stands for:",
  options: [
    "Cross-Origin Resource Sharing",
    "Cross-Origin Response Script",
    "Client-Origin Response Sharing",
    "Code-Origin Request System"
  ],
  answer: "Cross-Origin Resource Sharing"
};

let ques14 = {
  question: "Event loop in JavaScript is responsible for:",
  options: [
    "Managing async callbacks",
    "Variable declaration",
    "Memory allocation",
    "Parsing HTML"
  ],
  answer: "Managing async callbacks"
};

let ques15 = {
  question: "Arrow functions do not have their own:",
  options: ["this", "arguments object", "prototype", "All of the above"],
  answer: "All of the above"
};

let ques16 = {
  question: "Cookies are stored:",
  options: ["On the server only", "On the client browser", "In sessionStorage", "In localStorage"],
  answer: "On the client browser"
};

let ques17 = {
  question: "Debouncing ensures that:",
  options: [
    "Function executes once after a pause in events",
    "Function executes multiple times quickly",
    "Function throttles requests",
    "Function executes on every keystroke"
  ],
  answer: "Function executes once after a pause in events"
};

let ques18 = {
  question: "Throttling ensures that:",
  options: [
    "Function executes at most once in a given interval",
    "Function executes after delay",
    "Function executes immediately and never again",
    "Function skips all executions"
  ],
  answer: "Function executes at most once in a given interval"
};

let ques19 = {
  question: "Debouncing vs Throttling:",
  options: [
    "Debounce waits, Throttle limits",
    "Throttle waits, Debounce limits",
    "Both are identical",
    "Both execute continuously"
  ],
  answer: "Debounce waits, Throttle limits"
};

let ques20 = {
  question: "ES6 modules are imported using:",
  options: ["require()", "module.export()", "import", "fetch()"],
  answer: "import"
};

let ques21 = {
  question: "Service workers can:",
  options: [
    "Run background tasks",
    "Directly access DOM",
    "Block event loop",
    "Store permanent cookies"
  ],
  answer: "Run background tasks"
};

let ques22 = {
  question: "Async/Await is built on top of:",
  options: ["Callbacks", "Promises", "Generators", "Events"],
  answer: "Promises"
};

let ques23 = {
  question: "A polyfill is:",
  options: [
    "Code that provides modern functionality on old browsers",
    "A patch for CSS",
    "A JS testing library",
    "A cookie helper"
  ],
  answer: "Code that provides modern functionality on old browsers"
};

let ques24 = {
  question: "Event bubbling means:",
  options: [
    "Event propagates from child to parent",
    "Event propagates from parent to child",
    "Event is cancelled",
    "Event is async only"
  ],
  answer: "Event propagates from child to parent"
};

let ques25 = {
  question: "Event delegation is:",
  options: [
    "Attaching a single handler to a parent to manage child events",
    "Passing event from parent to child",
    "Blocking event bubbling",
    "Binding multiple handlers to each child"
  ],
  answer: "Attaching a single handler to a parent to manage child events"
};


let ques26 = {
  question: "Functional programming in JavaScript emphasizes:",
  options: [
    "Pure functions and immutability",
    "Object-oriented design",
    "Procedural loops",
    "DOM manipulation"
  ],
  answer: "Pure functions and immutability"
};

let ques27 = {
  question: "What does 'use strict' do in JavaScript?",
  options: [
    "Enables modern syntax",
    "Prevents usage of undeclared variables",
    "Automatically makes variables const",
    "Optimizes loops"
  ],
  answer: "Prevents usage of undeclared variables"
};

let ques28 = {
  question: "Object.freeze() in JavaScript:",
  options: [
    "Makes object completely immutable",
    "Deletes all keys of object",
    "Prevents adding new properties only",
    "Converts object to string"
  ],
  answer: "Makes object completely immutable"
};

let ques29 = {
  question: "LESS is:",
  options: [
    "A CSS preprocessor",
    "A JavaScript library",
    "An HTML templating engine",
    "A build tool"
  ],
  answer: "A CSS preprocessor"
};

let ques30 = {
  question: "SCSS is a syntax of:",
  options: ["SASS", "LESS", "Stylus", "PostCSS"],
  answer: "SASS"
};

let ques31 = {
  question: "Difference between SCSS and SASS?",
  options: [
    "SCSS uses curly braces, SASS uses indentation",
    "SASS is faster",
    "SCSS does not support variables",
    "Both are unrelated"
  ],
  answer: "SCSS uses curly braces, SASS uses indentation"
};

let ques32 = {
  question: "The super keyword in JavaScript is used to:",
  options: [
    "Call parent class constructor or methods",
    "Create a prototype",
    "Refer to global scope",
    "Freeze an object"
  ],
  answer: "Call parent class constructor or methods"
};

let ques33 = {
  question: "Lodash is primarily used for:",
  options: [
    "Utility functions for arrays, objects, strings",
    "Managing databases",
    "Testing React components",
    "Compiling TypeScript"
  ],
  answer: "Utility functions for arrays, objects, strings"
};

let ques34 = {
  question: "Modern ES6 features include:",
  options: [
    "Spread operator and destructuring",
    "Hoisting and closures",
    "Only callbacks",
    "Global variables"
  ],
  answer: "Spread operator and destructuring"
};

let ques35 = {
  question: "GraphQL is:",
  options: [
    "A query language for APIs",
    "A CSS framework",
    "A JavaScript array method",
    "A testing library"
  ],
  answer: "A query language for APIs"
};

let ques36 = {
  question: "Jest is mainly used for:",
  options: [
    "Testing JavaScript applications",
    "Compiling SCSS",
    "Handling CORS",
    "Managing GraphQL APIs"
  ],
  answer: "Testing JavaScript applications"
};

let ques37 = {
  question: "Which is NOT an Array method in JavaScript?",
  options: ["map()", "filter()", "reduce()", "concatAll()"],
  answer: "concatAll()"
};

let ques38 = {
  question: "Redux is primarily used for:",
  options: [
    "State management in React",
    "Testing JavaScript code",
    "Styling components",
    "Compiling ES6"
  ],
  answer: "State management in React"
};

let ques39 = {
  question: "Context API in React is used to:",
  options: [
    "Pass data without prop drilling",
    "Handle API requests",
    "Style components",
    "Improve async code"
  ],
  answer: "Pass data without prop drilling"
};

let ques40 = {
  question: "Which hook is used to add state in React functional components?",
  options: ["useEffect", "useState", "useReducer", "useMemo"],
  answer: "useState"
};

let ques41 = {
  question: "Component lifecycle methods are available in:",
  options: [
    "React class components",
    "React functional components only",
    "Vanilla JS objects",
    "Redux store"
  ],
  answer: "React class components"
};

let ques42 = {
  question: "Which method can be used to clone an object?",
  options: ["Object.assign()", "Array.push()", "JSON.stringify()", "Object.clone()"],
  answer: "Object.assign()"
};

let ques43 = {
  question: "Shallow copy vs Deep copy:",
  options: [
    "Shallow copy copies references, deep copy copies values",
    "Both copy values only",
    "Both copy references only",
    "Shallow copy is always immutable"
  ],
  answer: "Shallow copy copies references, deep copy copies values"
};

let ques44 = {
  question: "JWT stands for:",
  options: [
    "JSON Web Token",
    "JavaScript Web Transfer",
    "Java Token Wrapper",
    "JavaScript Window Tool"
  ],
  answer: "JSON Web Token"
};

let ques45 = {
  question: "In JavaScript, primitive values are passed:",
  options: ["By value", "By reference", "By both", "Cannot be passed"],
  answer: "By value"
};

let ques46 = {
  question: "Difference between async and defer in script tags?",
  options: [
    "Async loads and executes immediately, defer executes after HTML parsing",
    "Defer loads immediately, async executes later",
    "Both are identical",
    "Both block HTML parsing"
  ],
  answer: "Async loads and executes immediately, defer executes after HTML parsing"
};

let ques47 = {
  question: "Which array method removes the last element?",
  options: ["pop()", "push()", "shift()", "unshift()"],
  answer: "pop()"
};

let ques48 = {
  question: "Difference between slice() and splice() in arrays?",
  options: [
    "slice() does not modify original array, splice() does",
    "Both modify original array",
    "splice() is immutable, slice() is not",
    "Both are identical"
  ],
  answer: "slice() does not modify original array, splice() does"
};

let ques49 = {
  question: "Difference between slice(), substring(), and substr()?",
  options: [
    "slice() supports negative index, substring() does not, substr() uses length",
    "All are identical",
    "substring() supports negatives",
    "substr() removes elements"
  ],
  answer: "slice() supports negative index, substring() does not, substr() uses length"
};

let ques50 = {
  question: "Which method adds one or more elements to the beginning of an array?",
  options: ["shift()", "push()", "unshift()", "concat()"],
  answer: "unshift()"
};









// Storing all the Quiz Question
let questionBANK = [
  ques1, ques2, ques3, ques4, ques5,
  ques6, ques7, ques8, ques9, ques10,
  ques11, ques12, ques13, ques14, ques15,
  ques16, ques17, ques18, ques19, ques20,
  ques21, ques22, ques23, ques24, ques25,
  ques26, ques27, ques28, ques29, ques30,
  ques31, ques32, ques33, ques34, ques35,
  ques36, ques37, ques38, ques39, ques40,
  ques41, ques42, ques43, ques44, ques45,
  ques46, ques47, ques48, ques49, ques50
];





// Selecting Random 5 Question
function random5ques(){

// // Duplicate Index not appear
//     const dispQUES= new Set(); 
//     while(dispQUES.size != 5){
//         let indx= Math.floor(Math.random()*50);

//         dispQUES.add(questionBANK[indx]);
//     }

  // Convert set into Array
  // return [...dispQUES];



// Optimized code 

    // //using Sort Function   Naive Shuffling   //O(nlogn)
    // questionBANK.sort(()=> Math.random()-0.5);
    // return questionBANK.slice(0,5);




    // // Fisher Algo    //O(n)    //Inplace sorting
    // function fisherShuffle(questionBANK){
    //   for(let i= questionBANK.length-1; i>0; i--){
    //     const j= Math.floor(Math.random() * (i+1));
    //     [questionBANK[i], questionBANK[j]]= [questionBANK[j], questionBANK[i]];

    //   }
    // }
    // fisherShuffle(questionBANK);
    // return questionBANK.slice(0,5);




    // Most Optimized   BigOmega(Random Question to generate)     O(n);
    const arropti= [];
    let QBsize= questionBANK.length;

    let j=0;
    while(j != 5){
      const k= Math.floor(Math.random()*QBsize);

      arropti.push(questionBANK[k]);
      [questionBANK[k], questionBANK[QBsize-1]] = [ questionBANK[QBsize-1], questionBANK[k]];

      j++;
      QBsize--;
    }
    return arropti;

}




// Selecting FORM and inserting element
const selectedFORM= document.querySelector('form');



const problems= random5ques();

const orignalAnswer= {};

problems.forEach((objQUES, qno)=>{
    let createdDIV= document.createElement('div');
    createdDIV.className= "question";

    orignalAnswer[`q${qno+1}`]= objQUES['answer'];

    let createdPara= document.createElement('p');
    createdPara.textContent= qno+1+". "+objQUES['question'];
    createdDIV.appendChild(createdPara);



    objQUES['options'].forEach((opval)=>{
        let createdLABEL1= document.createElement('label');

        let createdIP1= document.createElement('input');
        createdIP1.type= "radio";
        createdIP1.name=  `q${qno+1}`;
        createdIP1.value= opval;
        createdLABEL1.appendChild(createdIP1);

        createdLABEL1.appendChild(document.createTextNode(opval));
        
        createdDIV.appendChild(createdLABEL1);
        createdDIV.appendChild(document.createElement('br'));
    })

   selectedFORM.appendChild(createdDIV); 
})




let createdivAct= document.createElement('div');
createdivAct.className= "actionButton";

let createSUBMIT= document.createElement('button');
createSUBMIT.type= "submit";
createSUBMIT.id= "submit";
createSUBMIT.innerText= "Submit";

createdivAct.appendChild(createSUBMIT);


let createdivNXT= document.createElement('div');
createdivNXT.className= "reNX";

let createRESET= document.createElement('button');
createRESET.type= "reset";
createRESET.id= "reset";
createRESET.innerText= "Reset";
createdivNXT.appendChild(createRESET);


let createNEXTQUIZ= document.createElement('button');
createNEXTQUIZ.type= "button";
createNEXTQUIZ.id= "nextQuiz";
createNEXTQUIZ.innerText= "Next Quiz";
createdivNXT.appendChild(createNEXTQUIZ);

createdivAct.appendChild(createdivNXT);
selectedFORM.appendChild(createdivAct); 






selectedFORM.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    const userIP= new FormData(selectedFORM);


    let totalscore= 0;
    for(let [key, value] of userIP.entries()){
        if(value === orignalAnswer[key])
            totalscore++;
    } 

    let createRESULT= document.createElement('div')
    createRESULT.id= "result";
    
    createRESULT.innerText= `${totalscore} out of 5 CORRECT`;
    document.body.appendChild(createRESULT) 
    
    setTimeout(()=>{
        createRESULT.remove();
    },6000)

})

    document.getElementById('nextQuiz').addEventListener('click', () => {
        location.reload();

    });




