import React from "react";
import "./color2.css";

const Color2 = () => {
    return(
        <div id="color2">
            <div className="horse"></div>
            <div className="color2Wrap">
                <div className="color2Bubble"></div>
                <div className="btn-wrap">
                    <button type="button" className="red"></button>
                    <button type="button" className="yellow"></button>
                    <button type="button" className="blue"></button>
                </div>
                <p className="color2Comment">
                    아이가 원하는 색상을 직접 만들며 색감을 스스로 발달시킵니다.<br/>
                    색이 잘 섞이므로 누구나 쉽게 다양한 색을 만들 수 있습니다.
                </p>
            </div>
        </div>
    );
}

export default Color2;