import React from "react";

import './men.css'

import m1 from './assests/m1.jpg';
import m2 from './assests/m2.jpg';
import m3 from './assests/m3.jpg';
import m4 from './assests/m4.jpg';
import m5 from './assests/m5.jpg';
import m6 from './assests/m6.jpg';
import m7 from './assests/m7.jpg';
import m8 from './assests/m8.jpg';
import m9 from './assests/m9.jpg';


function Men(){

    return(
        < div id="men">

        <h1  className="h1">Men's Fashion</h1>
        <div className="container" >
            <div className="row">
                <div className="col-md-2">

                    <img src={m1} alt="" className="image"/>

               </div>

                

                <div className="col-md-2">

                    <img src={m2} alt="" className="image"/>


                </div>
                <div className="col-md-2">

                    <img src={m3} alt="" className="image"/>


                </div>
                
                <div className="col-md-2">

                    <img src={m4} alt="" className="image"/>


                </div>
                <div className="col-md-2">

                    <img src={m5} alt="" className="image"/>


                </div>
                <div className="col-md-2">

                    <img src={m6} alt="" className="image"/>


                </div>

                 <div>
                
                                    <h1 className="h1">Sherwani</h1>
                                    
                
                        <img className="herbal-tea" src={m7} alt=""  style={{height:"400px",width:"300px",float:"left"}} />
                        
                        <p className="para1" style={{marginTop:"50px"}}>A sherwani is a long-sleeved outer coat worn by men in South Asia. Like the Western frock coat, it is fitted, with some waist suppression; it falls to below the knees and is buttoned down the front. It can be collarless, have a shirt-style collar, or a stand-up collar in the style of the Mandarin collar.
                            The sherwani, a long coat-like garment, originated in the Indian subcontinent during the Mughal era, specifically the 16th-17th centuries. 
                
                        </p>
                        </div>
                
                <div>
                        
                        <h1 className="h1">Suit</h1>
                
                        <img className="herbal-tea" src={m8} alt=""  style={{height:"400px",width:"300px",float:"right"}} />
                        
                        <p className="para1" style={{marginTop:"50px"}}>A suit, also called a lounge suit, business suit, dress suit, or formal suit, is a set of clothes comprising a suit jacket and trousers of identical textiles generally worn with a collared dress shirt, necktie, and dress shoes. A skirt suit is similar, but with a matching skirt instead of trousers.
                             a formal or semiformal ensemble, typically for a man, with matching jacket and trousers, usually worn with a dress shirt and necktie, sometimes including a vest.
                
                        </p>
                
                        
                                </div>
                                <div>
                        
                <h1 className="h1">Dhoti</h1>
                        <img className="herbal-tea" src={m9} alt=""  style={{height:"400px",width:"300px",float:"left"}} />
                        
                        <p className="para1" style={{marginTop:"50px"}}> A dhoti is a traditional Indian garment, a rectangular piece of unstitched cloth, typically around 5 yards long, worn by men. It's wrapped around the waist and legs, resembling trousers, and is a significant part of Indian culture and heritage. 
                            The dhoti's origins trace back to ancient India, possibly even the Indus Valley Civilization, and is mentioned in ancient scriptures. 
                
                        </p>
                
                        
                                </div>
                
            </div>

        </div>
        </div>
    )
}

export default Men