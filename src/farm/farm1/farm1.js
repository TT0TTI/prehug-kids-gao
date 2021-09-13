import React from "react";
import "./farm1.css";

const Farm1 = () => {
    return (
        <div id="farm1">
                
                <div className="leftRice1"></div>
                <div className="farmer"></div>
                <div className="rightRice1"></div>

                <div className="farmSpeechWrap">
                    <div className="farmTitle"></div>
                    <p className="farmSpeech">
                        식재료만 넣은 안전한<br/>
                        우리쌀 점토 키즈가오는<br/>
                        우리 쌀을 사용하여 만들어요.<br/>
                        화학물질을 사용하지 않고,<br/>
                        식재료를 사용해서 만든<br/>
                        안전한 제품이랍니다.
                    </p>
                </div>

            </div>
    );
}

export default Farm1;