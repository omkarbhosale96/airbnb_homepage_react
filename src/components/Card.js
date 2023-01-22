import React from "react"

function Card(props){
    return (
        <div className="card">
            <img src={require(`../images/${props.img}`)} alt="" />
            <div className="content">
            <div className="card-header">
                <p>{props.city}, {props.state}</p>
                <p><span>&#9733;</span> {props.rating}</p>
            </div>
            <p className="distance">{props.distance} kilometers away</p>
            <p><span className="price">{props.price}$</span> night</p>
            </div>
            <button className="button-4">Book Now</button>
        </div>
    );
}

export default Card;