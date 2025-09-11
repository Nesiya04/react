import React from "react";
import Sarees from "./sarees";

import './container.css'

import w1 from './assests/w1.jpg';
import w2 from './assests/w2.jpg';
import w3 from './assests/w3.jpg';
import w4 from './assests/w4.jpg';
import w5 from './assests/w5.jpg';
import w6 from './assests/w6.jpg';
import w7 from './assests/w7.jpg';
import w8 from './assests/w8.jpg';
import w9 from './assests/w9.jpg';
import w10 from './assests/w10.jpg';
import w11 from './assests/w11.jpg';
import w12 from './assests/w12.jpg';
import w13 from './assests/w13.jpg';
import w14 from './assests/w14.jpg';
import w15 from './assests/w15.jpg';



function Women(){

    return(
        <div id="women">

        <h1 className="h1">Women's Western</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-2">

                    <img src={w4} alt="" className="image"/>

               </div>

                

                <div className="col-md-2">

                    <img src={w1} alt="" className="image"/>


                </div>
                <div className="col-md-2">

                    <img src={w2} alt="" className="image"/>


                </div>
                
                <div className="col-md-2">

                    <img src={w5} alt="" className="image"/>


                </div>
                <div className="col-md-2">

                    <img src={w3} alt="" className="image"/>


                </div>
                <div className="col-md-2">

                    <img src={w6} alt="" className="image"/>


                </div>
                <div className="col-md-2">

                    <img src={w7} alt="" className="image"/>


                </div>
                <div className="col-md-2">

                    <img src={w8} alt="" className="image"/>


                </div>
                <div className="col-md-2">

                    <img src={w9} alt="" className="image"/>


                </div>
                <div className="col-md-2">

                    <img src={w10} alt="" className="image"/>


                </div>
                <div className="col-md-2">

                    <img src={w11} alt="" className="image"/>


                </div>
                <div className="col-md-2">

                    <img src={w12} alt="" className="image"/>


                </div>

                <Sarees/>

                <div>

                    <h1 className="h1">Half Saree</h1>
                    

        <img className="herbal-tea" src={w13} alt=""  style={{height:"400px",width:"300px",float:"left"}} />
        
        <p className="para1">A half saree, also known as "Pattu Pavadai Dhavani" in Tamil Nadu, "Langa Voni" in Andhra Pradesh, and "Langa Davani" in Karnataka, is a traditional South Indian outfit consisting of a skirt (lehenga), a blouse (choli), and a dupatta (shawl/drape). It's a coming-of-age garment traditionally worn by young girls during puberty ceremonies, marking their transition into womanhood. While rooted in tradition, half sarees are also popular for various other occasions and celebrations.  

        </p>
        </div>

<div>
        
        <h1 className="h1">Kanchipuram Saree</h1>

        <img className="herbal-tea" src={w14} alt=""  style={{height:"400px",width:"300px",float:"right"}} />
        
        <p className="para1">Kanchipuram sarees, also known as Kanjeevaram sarees, are renowned silk sarees originating from the town of Kanchipuram in Tamil Nadu, India. These sarees are celebrated for their vibrant colors, intricate designs, and rich, contrasting borders. Woven with pure mulberry silk and often featuring gold and silver zari work, they are a symbol of traditional Indian craftsmanship and are considered auspicious, especially for weddings. 

        </p>

        
                </div>
                <div>
        
<h1 className="h1">Banaras Saree</h1>
        <img className="herbal-tea" src={w15} alt=""  style={{height:"400px",width:"300px",float:"left"}} />
        
        <p className="para1"> Their special characteristics are Mughal-inspired designs/elements such as intricate floral and foliate motifs, such as kalga and bel. Other features are gold work, compact weaving, figures with small details, metallic visual effects, “jali” (a net-like pattern) and “meena” work.Banarasi Tussar silk sarees are characterised by rich texture and elegant designs. They often have intricate floral and zari threads that are suitable for special occasions such as weddings, festivals, formal events, etc.Banarasi sarees are highly adored because of their handloom, zari work, and intricate designs. 

        </p>

        
                </div>

                
                
            </div>

        </div>
        </div>
    )
}

export default Women