import React from "react";
import ReactDOM from "react-dom";
 class Myweb extends React.Component
 {
    constructor(){
        super();
        this.state={initialvalue:"welcome",name: "to React state"}
    }
    render(){
        return<h1>{this.state.initialvalue}{this.state.name}</h1>
    }
 }

 ReactDOM.render(<Myweb/>,document.getElementById('root'))

 export default Myweb