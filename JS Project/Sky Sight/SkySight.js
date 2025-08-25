


document.getElementById('ipSUBMIT').addEventListener('click', (event)=>{
    event.preventDefault();

    const locNAME= document.getElementById('locIP').value;
    // console.log(locNAME);

    document.getElementById('result').innerHTML = '<p>Loading...</p>';
    document.getElementById('result').style.display = 'block';




    function displayUI(apiDATA){
            // console.log(apiDATA.current.temp_c);
            
            iptime= apiDATA.location.localtime;
            iptempp= apiDATA.current.temp_c;
            ipcond= apiDATA.current.condition.text;
            ipcondicon= apiDATA.current.condition.icon;
            iphumid= apiDATA.current.humidity;
            ipwind= apiDATA.current.wind_kph;
            ipwinddir= apiDATA.current.wind_dir;

            document.getElementById('result').innerHTML= `
                <div>
                    Current Temperature: ${iptempp} <sup>o</sup>C
                    <p>Local Time: ${iptime}</p><br>
                    <p>Weather Condition:<br> <img src="${ipcondicon}"><br> ${ipcond}</p><br>
                    <p>Humidity: ${iphumid}</p>
                    <p>Wind Speed & Direction: ${ipwind} ${ipwinddir}</p>
                </div>
            `;
    }

    function errorMSG(msg){
        document.getElementById('result').innerHTML = `
            <div>
                <p style="color: black; font-size: 2rem; font-weight: bolder;">Error: ${msg.message}</p>
                <p>Please check the location name and try again.</p>
            </div>
        `;

    }




    let iptime, iptempp, ipcond, ipcondicon, iphumid, ipwind, ipwinddir;
    fetch(`http://api.weatherapi.com/v1/current.json?key=ec777baaf7e54f0fb3061854252408&q=${locNAME}&aqi=no`)
        .then((body)=>{ 
            if(!body.ok){
                throw new Error ('Weather data not found')
            }
            return body.json()})
        .then((info)=> displayUI(info))
        .catch((error)=> errorMSG(error));    

    
})


