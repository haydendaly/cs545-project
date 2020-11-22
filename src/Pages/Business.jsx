import React from "react";

const Business = props => {
    const { business } = props;
    return (
        <div style={{ height: 200, width: 500, backgroundColor: "red", marginBottom: 10 }}>
            <p>{business.name}</p>
        </div>
    )
}

export default Business;