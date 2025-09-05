import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";

import cardProp from "./utils/dummy";

// import {greet as rename, meet as alias} from "./utils/dummy";


console.log(cardProp);
function App(){
    const [items, setItems]= useState(cardProp);

    const sortByPrice= ()=>{
        const sortedItems= [...cardProp].sort((a,b)=> a.price - b.price);
        setItems(sortedItems);
    }
    const SortBy1500= ()=>{
        const set1500= cardProp.filter((value)=> value.price>1499)
        setItems(set1500);
    }

    return (
        <>
            {/* // Header */}
            <Header onSort={sortByPrice} onSort1500= {SortBy1500} />


            {/* // Body */}
            <div id="bodyCard" style={{display: "flex", gap: "20px", flexWrap: "wrap"}}>
                {/* <Card cloth= "T-Shirts" off= "40-80%"/>
                <Card cloth= "Sports Shoes" off= "40-80%"/>
                <Card cloth= "Shirts" off= "40-80%"/>
                <Card cloth= "Jeans" off= "40-80%"/>
                <Card cloth= "Kurtas & Sets" off= "50-80%"/>
                <Card cloth= "Trousers" off= "40-80%"/>
                <Card cloth= "Track Pants" off= "80%"/>
                <Card cloth= "Loungewear" off= "80%"/>
                <Card cloth= "Innerwear" off= "70%"/>
                <Card cloth= "Belts & Wallets" off= "40-80%"/>
                <Card cloth= "Sunglasses & Frames" off= "30-70%"/>
                <Card cloth= "Kids Wear" off= "50-70%"/>
                <Card cloth= "Home Furnishings" off= "40-70%"/>
                <Card cloth= "Casual Shoes" off= "40-70%"/>
                <Card cloth= "Flip-Flops" off= "30-70%"/>
                <Card cloth= "Activewear" off= "30-70%"/>
            */}

            {
                items.map((values, indx)=><Card key={values.cloth+indx} cloth= {values.cloth} cardIMG={values.cardIMG} off= {values.off} price= {values.price}/>)
            }
            
            
            </div>
            


            {/* // Footer */}
            <Footer/>


        </>
    )


}




const Root= ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);




// Component or Module
//For neat and clean code so that it will be Readable we kept them in Separate File
// create Source folder: put all the JS file here
// Kept all Component in one separte folder inside src      
// write extension .jsx only when all the code in that js file is JSX format 
// other wise keep it .js           there will be no problem

// Import and Export
// in a file we can only write One time export default

// keep all dummy data/ images etc in utility folder