import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client"

import BGclr from "./ColorChage";

function Main(){
    const [count, setCount]= useState(0);


    return (


        <>
            <div id="count">
                <h2>Count Value: {count}</h2>
                <button id="incr" style={{color: "black"}} onClick={()=>setCount(count+1)} >Increment</button>
            </div>



            <BGclr pm={count}></BGclr>
        </>
    )

}


ReactDOM.createRoot(document.getElementById('container')).render(<Main></Main>)