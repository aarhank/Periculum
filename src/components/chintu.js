import React from 'react'
import './Main.css'
import {Link} from 'react-router-dom'
export default function chintu() {
    return (
        <Link to="/search" style={{ textDecoration: 'none' }}>
        <div class="frankcont">
                <div class="frank" onclick="activate()">
                    <div class="leftEye">
                    <div class="lIris"></div>
                    </div>
                    <div class="rightEye">
                    <div class="rIris"></div>
                    </div>
                </div>
                </div>
                <div class="IntPanelLeft">
                
                <li><i class="far fa-clock"></i></li>
                <li onclick="gDate()"><i class="far fa-calendar"></i></li>
                </div>
                <div class="IntPanelRight">
                <li><i class="far fa-grin-squint-tears"></i></li>
                <li><i class="far fa-lightbulb"></i></li>
                <li><i class="far fa-search"></i></li>
                </div>
                <div class = "responsePanel"></div>
    </Link>
    )
}
