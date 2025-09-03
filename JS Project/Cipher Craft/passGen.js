import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

function CopyMe(){
    const passCopy= document.getElementById('mypass').innerText;

    navigator.clipboard.writeText(passCopy)
        .then(()=>{
            console.log("Paasword Copied to Clipboard");
        })
        .catch(err=>{
            console.error('Failed to copy password', err);
        });
}


function Main(){
    const [password, setPassword]= useState("PasswordGenerator");
    const [count, setCount]= useState(16);
    const [numberChanged, setNumChange]= useState(false);
    const [charChanged, setCharChange]= useState(false);


    function PassGenerate(){
        let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghtijklmnopqrstuvwxyz";

        if(numberChanged){
            str+= "1234567890";
        }
        if(charChanged){
            str+= "`~!@#$%^&*()-_+={[}]|:;<>,.?/";
        }

        let passVal= "";
        for(let i=0; i<count; i++)
            passVal+= str[Math.floor(Math.random()*str.length)];
    
        setPassword(passVal);
    }
    
    // PassGenerate();      if we did like this....then there will be ifinite Render occur

    useEffect(()=>{
        PassGenerate();
    }, [numberChanged, charChanged, count]);


    return(
        <>
            <h1>CipherCraft</h1>
            <div id="container" >
                <div id= "pass">
                    <button onClick={CopyMe} >Copy</button>
                    <p id="mypass">{password}</p>
                </div>
                <div id="filter">
                    <input type="range" min={8} max={24} value={count} onChange={(val)=>setCount(val.target.value)} /><label> Length is: {count}</label><br/>
                    <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setNumChange(!numberChanged)} /><label> Number</label><br/>
                    <input type="checkbox" defaultChecked={charChanged} onChange={()=>setCharChange(!charChanged)} /><label> Symbol</label><br/>
                </div>
            </div>

        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<Main></Main>)