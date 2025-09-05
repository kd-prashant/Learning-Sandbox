//Card
function Card(props){
    return(
        
        <div className="card1">
            <img src={props.cardIMG} height="250px" width="250px"/>
            <div className="cardDet" style={{textAlign: "center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.off}</h1>
                <h2>Shop Now</h2>
                <h3 id="price">&#x20B9;{props.price}</h3>
            </div>
        </div>
    )
}

export default Card;