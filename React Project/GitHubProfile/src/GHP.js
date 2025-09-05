import React, {useState, useEffect, useCallback} from "react";
import ReactDOM from "react-dom/client";

import Title from "./Component/Header";
import ProfileSec from "./Component/Body";

function GitHubProfile(){
   
    return(
        <>
            <Title></Title>
            <ProfileSec></ProfileSec>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<GitHubProfile></GitHubProfile>)