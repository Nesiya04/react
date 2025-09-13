import React from "react";

import './perfume.css'

import p1 from './assests/p1.jpg';
import p2 from './assests/p2.jpg';
import p3 from './assests/p3.jpg';
import p4 from './assests/p4.jpg';
import p5 from './assests/p5.jpg';
import p6 from './assests/p6.jpg';
import p7 from './assests/p7.jpg';
import p8 from './assests/p8.jpg'


function Perfume(){

    return(
        <>

        <h1 className="h1">Perfume</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-3">

                    <img src={p1} alt="" className="image1" id="perfume"/>

               </div>

                

                <div className="col-md-3">

                    <img src={p2} alt="" className="image1" id="perfume"/>


                </div>
                <div className="col-md-3">

                    <img src={p3} alt="" className="image1" id="perfume"/>


                </div>
                
                <div className="col-md-3">

                    <img src={p4} alt="" className="image1" id="perfume"/>


                </div>
                <div className="col-md-3">

                    <img src={p5} alt="" className="image1" id="perfume"/>


                </div>
                <div className="col-md-3">

                    <img src={p6} alt="" className="image1" id="perfume"/>

                </div>

                <div className="col-md-3">

                    <img src={p7} alt="" className="image1" id="perfume"/>


                </div>
                <div className="col-md-3">

                    <img src={p8} alt="" className="image1" id="perfume"/>

                </div>
                
            </div>

        </div>
        </>
    )
}

export default Perfume