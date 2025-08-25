

const restaurant= [];

const resName= [
  "INJA Restaurant", "AnnaMaya FoodHall - Andaz Delhi", "Delhi 'O' Delhi", "Indian Accent",
  "Oh! Calcutta", "Rajinder Da Dhaba", "Tamra Restaurant", "Le Cirque", "Pind Balluchi Regal Building",
  "38 Barracks Restaurant and Bar", "Bukhara", "Karim's", "Big Chill", "Parikrama The Revolving Restaurant",
  "Diggin", "Saravana Bhavan", "Gulati Restaurant", "Sagar Ratna", "Punjabi By Nature", "The GT Road",
  "Moti Mahal Delux", "Yum Yum Cha", "Social", "Kuremal Mohan Lal Kulfi Wale", "SodaBottleOpenerWala"
];


const foodType = [
  "Italian", "Chinese", "Indian", "Mexican", "American", "Thai", "Japanese",
  "Mediterranean", "French", "Continental", "Korean", "Seafood"
];

const resLoc = [
  "Malcha Marg", "Lodhi Rd", "Safdarjung Enclave", "Major Somnath", "Sardar Patel",
  "Connaught Cir", "Maharaja Surajmal", "Samalka", "Chanakyapuri", 
  "Rama Krishna", "Vishwas Nagar", "Diplomatic Enclave"
];





for(let i=0; i<100; i++){
    const cardDetail= {};

    cardDetail["cardImage"] =["card1", "card2", "card3", 
                            "card4", "card5", "card6", 
                            "card7", "card8", "card9", 
                            "card10", "card11", "card12"][Math.floor(Math.random()*12)];


    cardDetail["cardResName"]= resName[Math.floor(Math.random()*24)];


    cardDetail["cardRating"]= (Math.random() * 3 + 2).toFixed(1) * 1;


    cardDetail["cardFoodType"]= foodType[Math.floor(Math.random()*12)];


    cardDetail["cardFoodPrice"]= Math.floor(Math.random()* (2401) + 100);


    cardDetail["cardResLoc"]= resLoc[Math.floor(Math.random()*12)];


    cardDetail["cardResDist"]= (Math.random() * 8 + 1).toFixed(1) * 1;


    cardDetail["cardOffer"]= Math.floor(Math.random()* 29 + 10 );


    cardDetail["cardResAlochol"]= Math.random() > 0.7;

    
    cardDetail["cardResOpTi"]= Math.floor( Math.random()*24 );

    cardDetail["cardResClTi"]= [ cardDetail["cardResOpTi"] + 12] %24;


    restaurant.push(cardDetail);
}



// console.log(restaurant);



// Converting array to JSON
const fs = require('fs');

try {
  fs.writeFileSync('dummydata.json', JSON.stringify(restaurant, null, 2));
  console.log('dummydata.json saved successfully!');
} catch (error) {
  console.error('Error saving file:', error);
}
