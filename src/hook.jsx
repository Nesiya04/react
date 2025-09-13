
import React ,{useState} from "react";

function ReactHook(){
    const [count,updateCount]=useState(0);
    return(
         <div>
            <h1>click button :{count} times</h1>
            <button onClick={() => updateCount(count + 1)}>click </button>
         </div>
    )
}

export default ReactHook