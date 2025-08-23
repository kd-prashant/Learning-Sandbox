

let parent= document.querySelector('body');

parent.addEventListener('click', (event)=>{
    let xcoord= event.clientX;
    let ycoord= event.clientY;

    let createcircle= document.createElement('div');
    createcircle.textContent= "Hello";
    createcircle.setAttribute("id","circle")

    let colorR= Math.floor(Math.random()*256);
    let colorG= Math.floor(Math.random()*256);
    let colorB= Math.floor(Math.random()*256);
    let colorRGB= "rgb( " + colorR + ", " + colorG + ", " + colorB + " )";
    createcircle.style.backgroundColor= colorRGB;

    createcircle.style.left= `${xcoord - 25}px`;
    createcircle.style.top= `${ycoord - 25}px`;

    // parent.insertAdjacentElement("afterbegin", createcircle);
    document.body.appendChild(createcircle);


    setTimeout(()=>{
        createcircle.remove();
    }, 5000)
})

