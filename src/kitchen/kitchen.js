import React from "react";
import "./kitchen.css";

const Kitchen = () => {

    return(
        <div id="kitchen">

            <div className="leftPan"></div>
            <div className="rightPot"></div>

            <div className="steamWrap">
                <div className="steam"></div>
                <div className="bubble1"></div>
            </div>

            <div className="kitchenBubble"></div>

        </div>
    );

}

export default Kitchen;