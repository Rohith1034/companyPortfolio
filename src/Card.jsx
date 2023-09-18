import React from "react";

function Card(props) {
    return <div className="card">
        <img className="card-img" alt="card-img" src= {props.img}></img>
        <h5 className="card-details">{props.details}</h5>
        <p className="card-content">{props.content}</p>
    </div>;
}

export default Card;