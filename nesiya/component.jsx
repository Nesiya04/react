import React from "react";

 class Myweb extends React.Component{
    render(){
        return(
            <h1>welcome to{this.props.var}</h1>
        )
    }
 };

 class Myweb2 extends React.Component{
    render(){
        const v="web development";

        return(
            <Myweb var={v}></Myweb>

        )
    }
 }
 export default Myweb2