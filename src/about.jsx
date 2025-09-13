import React from "react";

import './about.css'

import a1 from './assests/a1.jpg'

 class Myweb extends React.Component{
    
    render(){
        return(
    < div id="aabout">
            <h1 className="h1-web">About {""} {this.props.var} </h1>
            <div className="hero-container">
            
            
            <img src={a1} alt=""  className="hero-image"/>

            <div>

            <p className="hero-text"> Aurelia is an Indian e-commerce company, founded in 2025, that connects suppliers with customers, aiming to democratize internet commerce. It allows individuals and small businesses to sell products online, often without needing their own physical stores, and provides access to a wide range of products at affordable prices. Aurelia"'s core mission is to empower small businesses and individual entrepreneurs by enabling them to succeed online.The company strives to make e-commerce accessible to a broader audience, including those who may not have the resources to establish their own online stores. Aurelia offers a vast selection of products across categories like fashion, home & kitchen, beauty & personal care, and electronics. </p>

            

            </div>
            
            </div>
            </div>
        )
    }
 };

 class Myweb2 extends React.Component{
    render(){
        const v="Us";

        return(
            <Myweb var={v}></Myweb>

        )
    }
 }
 export default Myweb2