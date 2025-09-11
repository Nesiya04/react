import React from "react";

class Footer extends React.Component{
    render(){

        return(
            <footer style={{backgroundColor:"palevioletred",color:"white",padding:"20px",textAlign:"center" ,marginTop:"40px"}}>
                <h4>{this.props.brandName}</h4>
                <p>Contact us:{this.props.email}</p>
            </footer>
        );
    }
};

export default Footer;