import React from "react";

const Business = props => {
    const { business } = props;
    return (
        <div style={{ height: 200, width: 500, backgroundColor: "red", marginTop: 80 }}>
            <p>{business.name}</p>
        </div>
    )
}

export default Business;