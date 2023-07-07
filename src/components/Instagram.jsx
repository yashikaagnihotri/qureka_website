import React from "react";
import insta from "../images/insta.jpg";

function Instagram() {
    return(<div className="insta">
        <div className="insta-cont">
            <h3 className="insta-text">Stay updated with all the latest excitement by following us on Instagram!</h3>
            <button className="join-us-btn">FOLLOW US</button>
        </div>
        <img src={insta} alt="insta img" />
    </div>);
}

export default Instagram;