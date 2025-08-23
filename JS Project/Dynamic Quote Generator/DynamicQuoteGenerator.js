


function dqg(motiv, colorRGB){
    let dynquo= document.getElementById('quote');
    dynquo.innerHTML= motiv;

    let back= document.querySelector('body');
    back.style.backgroundColor= colorRGB;
}



let quotes=["Your future self is already watching you through memories — make sure you impress them."
,"Discipline is choosing between what you want now and what you want most."
,"You don’t need more time, you need more focus."
,"Don’t wait for inspiration. Create a system that makes motivation unnecessary."
,"Small progress each day adds up to massive results over time"
,"The gap between your dreams and reality is called consistent effort."
,"Courage is not the absence of fear, but the decision that something else matters more."
,"When you feel like quitting, remember why you started."
,"Losers quit when they fail. Winners fail until they succeed."
,"If it doesn’t challenge you, it won’t change you."
,"The person you will be in 5 years depends on what you do today."
,"Work in silence, let your success make the noise."
,"You are stronger than your excuses."
,"Dreams don’t work unless you do."
,"Be stubborn about your goals and flexible about your methods."
,"Consistency beats intensity."
,"Don’t downgrade your dream to match your reality, upgrade your effort to match your vision."
,"Great things never come from comfort zones."
,"Your only limit is the amount of action you take."
,"Your comfort zone is a beautiful place, but nothing ever grows there." ];


let currindx= 0;

function showquo(){
  
    let colorR= Math.floor( Math.random()*256);
    let colorG= Math.floor( Math.random()*256);
    let colorB= Math.floor( Math.random()*256);
    let RGBvalue= "rgb(" + colorR +", "+ colorG +", "+ colorB+ ")";
    // console.log(RGBvalue);
    RGBvalue= "rgb(" + colorR +", "+ colorG +", "+ colorB+ ")"

    dqg(quotes[currindx], RGBvalue);
    currindx= (currindx+1)%quotes.length;
}

showquo();

setInterval(showquo, 5000);

