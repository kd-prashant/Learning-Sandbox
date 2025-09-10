

let root= document.getElementById('root');

let title= document.createElement('div');
title.id="title";
title.innerHTML="Action Dash";
root.appendChild(title);

let main= document.createElement('div');
main.id= "main";


let Header= document.createElement('div');

let date= new Date();
date= date.toISOString().split('T')[0];

Header.innerHTML= `
        <div id="Task">
            <input type="text" name="taskName" id="taskName" placeholder="Task Name">
            <textarea name="newTask" id="newTask" placeholder="Solve 5 LeetCode Problem"></textarea>
            <button id="add">➕</button>
            <input type="date" min="${date}" name="setDate" id="setDate">
            <button id="delete">❌</button>
        </div>
 `

main.appendChild(Header);







root.appendChild(main);

let userTitle= document.getElementById('taskName');
let task1;
userTitle.addEventListener('blur', (event)=>{
    task1= event.target.value;
});

let task2;
let userDate= document.getElementById('newTask');
userDate.addEventListener('blur', (event)=>{
    task2= event.target.value;
});

let task3;
let userTask= document.getElementById('setDate');
userTask.addEventListener('change', ()=>{
    task3= userTask.value;
});








let count= 0;
document.getElementById('add').addEventListener('click', (event)=>{
    count++;
    let process1= document.createElement('div');
    process1.id=`child-${count}`;
    process1.className= "child1";
    process1.innerHTML=`
        <h1>${task1}</h1>

        <div  id="innerTask">
            <input type="checkbox" name="done" id="done">
            <h2>${task2}</h2>
            <button id="delProcess-${count}" class="delProcess">🗑️</button>
        </div>
    `;

    Header.style.borderBottom="5px solid white";
    Header.style.marginBottom="2rem";

    main.appendChild(process1);

    userTitle.value= "";
    userDate.value="";
    userTask.value=""


    document.getElementById(`delProcess-${count}`).addEventListener('click', (event)=>{
        main.removeChild(process1);
    })    


})












