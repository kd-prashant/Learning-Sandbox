
console.log("New Year Countdown");




let newYear= new Date();
newYear.setDate(1);
newYear.setFullYear(2026);
newYear.setMonth(0);
newYear.setHours(0,0,0,0)




// DOM 

let timeLeft, day, hours, min, sec;
const rootChild= document.createElement('div');
setInterval(()=>{
    let currDate= new Date();
    timeLeft= newYear.getTime()-currDate.getTime();
    day= Math.floor(timeLeft / (1000 * 60 * 60 *24));
    hours= Math.floor( (timeLeft % (1000 * 60 * 60 *24)) /(1000 * 60 * 60));
    min= Math.floor( (timeLeft % (1000 * 60 * 60)) /(1000*60));
    sec= Math.floor((timeLeft% (1000*60)) / 1000);

    
    rootChild.innerHTML= `
            <div id="rootChild">
            <section id="CountDown">
            <table>
                <thead>
                    <tr>
                        <th>Days</th>
                        <th>Hours</th>
                        <th>Minutes</th>
                        <th>Seconds</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>${day}</td>
                        <td>${hours}</td>
                        <td>${min}</td>
                        <td>${sec}</td>
                    </tr>
                </tbody>
            </table> 
            </section>
        </div>
`;
},1000)


document.getElementById('root').appendChild(rootChild);


