import { getSuggestedQuery } from "@testing-library/react";
import React from "react";

const Business = props => {
    const { business } = props;
    return (
        <div style={{height: 300, width: 1000, backgroundColor: "lightgrey", marginTop: 100, marginLeft: 400}}>
            <h1 style = {{marginLeft: 325}}>{business.name}</h1>
            <img src= {business.img} alt = {business.name} align = "left"></img>
            <p style = {{marginLeft: 325}}>{business.stars}...................{business.miles} Stars</p>
            <p style = {{marginLeft: 325}}>{business.indoor} {business.outdoor} {business.delivery} {business.temperature} Capacity : {business.capacity} persons</p>
            <br></br><br></br><br></br>
            <p style = {{marginLeft: 325}}>{business.description}</p>
        </div>
    )
}

export default Business;
