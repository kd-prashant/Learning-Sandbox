


// // ans
let answer= document.getElementById("ans");

let equal= document.getElementById('numEQ');


equal.addEventListener('click', ()=>{
    let num1= Number(document.getElementById('operand1').value);
    let opr= document.getElementById('operator').value;
    let num2= Number(document.getElementById('operand2').value);

    let result= 0;

    if(isNaN(num1) || isNaN(num2) || opr === ''){
        answer.innerHTML= "Please Enter Valid Values";
        return;
    }

    if(opr === '+')
        result= num1 + num2;
    else if(opr === '-')
        result= num1- num2;
    else if(opr === '*')
        result= num1* num2;
    else if(opr === '/'){
        if(num2 === 0){
            answer.innerHTML= "Cannot Divide by Zero";
            return;
        }
        result= num1/ num2;
    }
    else{
        answer.innerHTML= "Invalid Operator";
        return;
    }

    answer.innerHTML= result;

})

let oprn1ip= document.getElementById('operand1');
let oprip= document.getElementById('operator');
let oprn2ip= document.getElementById('operand2');

let currIP= 'operand1';

let numberbutton= document.getElementsByClassName('num');

for(let i=0; i<=numberbutton.length; i++){
    if(numberbutton[i]){
        numberbutton[i].addEventListener('click', (event)=>{
            let userip= event.target.textContent;

            if(userip >= '0' && userip<='9'){
                if(currIP === 'operand1'){
                    oprn1ip.value+= userip;
                }
                else if(currIP=== 'operand2'){
                    oprn2ip.value+= userip;
                }
            }
        });
    }
}


document.getElementById('numADD').addEventListener('click', ()=>{
    oprip.value= '+';

    currIP= 'operand2';
});
document.getElementById('numMIN').addEventListener('click', ()=>{
    oprip.value= '-';

    currIP= 'operand2';
});
document.getElementById('numMUL').addEventListener('click', ()=>{
    oprip.value= '*';

    currIP= 'operand2';
});
document.getElementById('numDIV').addEventListener('click', ()=>{
    oprip.value= '/';

    currIP= 'operand2';
});


let resetButton= document.getElementById('resetbutton');
resetButton.addEventListener('click', ()=>{
    document.getElementById('operand1').value= '';
    document.getElementById('operator').value= '';
    document.getElementById('operand2').value= '';
    document.getElementById('ans').innerHTML= '';

    currIP= 'operand1';
});













