
import React from "react";
import Marquee from "react-fast-marquee";


import k1 from './assests/k1.jpg';
import k2 from './assests/k2.jpg';
import w1 from './assests/w1.jpg';
import w2 from './assests/w2.jpg';
import m1 from './assests/m1.jpg';
import m2 from './assests/m2.jpg';
import p1 from './assests/p1.jpg';
import p2 from './assests/p2.jpg';
import s1 from './assests/s1.jpg';
import s2 from './assests/s2.jpg';
import b1 from './assests/b1.jpg';
import h1 from './assests/h1.jpg';
import h2 from './assests/h2.jpg';

import "./marquee.css";

function Marquee1(){
    return(
        <div  >
            <div className="title">
                <h1 className="h1">Our Products</h1>
            </div>
            <div>
                <Marquee >
                    <div className="image-wraper">
                        <img src={w1} alt="w1"/>
                    </div>
                    <div className="image-wraper">
                        <img src={w2} alt="w1"/>
                    </div>
                    <div className="image-wraper">
                        <img src={m1} alt="M1"/>
                    </div>
                    <div className="image-wraper">
                        <img src={m2} alt="M2"/>
                    </div>
                    <div className="image-wraper">
                        <img src={p1} alt="P1"/>
                    </div>
                    <div className="image-wraper">
                        <img src={p2} alt="P2"/>
                    </div>
                    <div className="image-wraper">
                        <img src={s1} alt="s1"/>
                    </div>
                    <div className="image-wraper">
                        <img src={s2} alt="s2"/>
                    </div>
                    <div className="image-wraper">
                        <img src={k1} alt="k1"/>
                    </div>
                    <div className="image-wraper">
                        <img src={k2} alt="k2"/>
                    </div>
                    <div className="image-wraper">
                        <img src={b1} alt="b1"/>
                    </div>
                    <div className="image-wraper">
                        <img src={h1} alt="h1"/>
                    </div>
                    <div className="image-wraper">
                        <img src={h2} alt="h2"/>
                    </div>
                </Marquee>
            </div>
        </div>
        
    )
}

export default Marquee1;