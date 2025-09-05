import React, {useEffect, useState} from "react";


function BGclr({pm}){
    //useState
    const [color, setColor]= useState("brown");

    console.log("Render");
    console.log();
    // document.body.style.backgroundColor= color;
    

    // it will be executed at last 
    useEffect(()=>{
        console.log("Use Effect Render");
        console.log();
        document.body.style.backgroundColor= color;

    },[color]); //whenever this dependency CHANGES then only use effect will be called again

    // console.log("Every statement(in the function) run before UseEffect()");
    console.log(pm);   
    console.log();   
    
    return (
        <>
            <h1>Background Color Changer</h1>
            <div id="bgop">
                {/* Rerender function: call Function again: each statement/line again run 
                    but this time setFUNCTIONname will keep the value and put it in useState()
                */}
                <button  style={{backgroundColor: "dodgerblue"}} onClick={()=> setColor("dodgerblue")} >Dodgerblue</button>         

                <button  style={{backgroundColor: "orange"}} onClick={()=> setColor("orange")} >Orange</button>
                
                <button  style={{backgroundColor: "crimson"}} onClick={()=> setColor("crimson")} >Crimson</button>
                
                <button  style={{backgroundColor: "Yellowgreen"}} onClick={()=> setColor("yellowgreen")} >Yellowgreen</button>
                
                <button  style={{backgroundColor: "black"}} onClick={()=> setColor("black")} >Black</button>
            </div>
        </>
    )
}

// export default BGclr;
export default React.memo(BGclr);