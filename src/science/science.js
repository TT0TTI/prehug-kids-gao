import React from "react";
import "./science.css";

const Science = () => {
    return(
        <div id="science">

            <div className="scienceWrap">

                <div className="scienceLeftWrap">
                    <div className="gly"></div>
                    <div className="leftTitle"></div>
                    <p className="scienceSpeech">                
                        자초 어성초 감초를 넣어서<br />
                        피부진정 및 항염 효과가 있답니다.
                    </p>
                </div>

                <div className="scienceCenterWrap">
                    <div className="purpleSteam"></div>
                    <div className="funnelBack"></div>
                    <div className="funnelFront"></div>
                </div>

                <div className="scienceRightWrap">
                    <div className="water"></div>
                    <div className="rightTitle"></div>
                    <p className="scienceSpeech">
                        빵의 표면을 촉촉하게 해주는<br/>
                        글리세린과 오메가-9지방산이<br/>
                        풍부한 올리브유를 넣어서<br/>
                        보습 효과도 뛰어나답니다.
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Science;