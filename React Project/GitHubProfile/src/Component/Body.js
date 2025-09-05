import { useEffect, useState } from "react";

import useFetch from "./useFetch";



function ProfileSec(){


    //Custom Hook
    const {Profile, fetchInfo, setCount,setUserID, fetchUser, count, userID, activeSec, User}=        useFetch();

    return (
        <div id="container">
            <div id="filter1">
                <input  id="profNUM" type="text" placeholder="Enter Number of Profiles to View e.g, 10" value={count} onChange={(event)=>setCount(event.target.value)}></input> 
                <button id="profEnter" onClick={()=>fetchInfo(Number(count))}>Get Profiles</button>
            </div>


            <div id="filter2">
                <input  id="profID" type="text" placeholder="Enter GitHub ID e.g., kd-prashant" value={userID} onChange={(event)=>setUserID(event.target.value)}></input> 
                <button id="profGET" onClick={()=>fetchUser(userID)}>Get Folio</button>
            </div>

            {activeSec === "user" && User.login && (
                <div className="cardSection">
                    {
                        <div key={User.id} id="card2">
                            <img id="cardIMG" src={User.avatar_url}></img>
                            <h2>{User.login}</h2>
                            <a href={User.html_url} target="_blank">Profile</a>
                        </div>                   
                    }
                </div>
                )
            }

            {activeSec === "profiles" && Profile.length>0 &&(
                <div className="cardSection">
                    {
                        Profile.map((value)=>{
                            return (
                                <div key={value.id} id="card">
                                    <img id="cardIMG" src={value.avatar_url}></img>
                                    <h2>{value.login}</h2>
                                    <a href={value.html_url} target="_blank">Profile</a>
                                </div>
                            )
                        })
                    }
                </div>
                )
            }

        </div>
    )
}


export default ProfileSec;