import { useEffect, useState } from "react";

export default function useFetch(){
    const [Profile, setProfile]= useState([]);
    const [count, setCount]= useState("");
    
    
    
    
    const[userID, setUserID]= useState("");
    
    const [User, setUser]= useState({});
    
    const [activeSec, setActiveSec]= useState();
    async function fetchUser(userID) {
        try{
            const response= await fetch(`https://api.github.com/users/${userID}`);
            if (response.ok) {
            const data = await response.json();
            setUser(data);
            setActiveSec("user");
            setProfile([]);
            } else {
            throw new Error('Network response was not ok');
            }
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=> {fetchUser("kd-prashant")},[]);


    async function fetchInfo(count){
        try{
            let range= Math.floor(Math.random()*10000 +1);

                const response= await fetch(`https://api.github.com/users?since=${range}&per_page=${count}`)
                const data= await response.json();

            setProfile(data);
            setActiveSec("profiles");
            setUser({});
        }catch(error){
            console.error("Failed to Fetch Profiles: ", error);
        }
    }

    return {Profile, fetchInfo, setCount,setUserID, fetchUser, count, userID, activeSec, User, setProfile,setUser, setActiveSec }

}