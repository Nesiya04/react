import React from "react";
 
function Nesi({a}){
    return (
        <div>
            <h1>hello</h1>
            <h3>
            name:{a.name}
            </h3>
           <h3>age:{a.age}</h3> 
           <h3> email:{a.email}
            </h3>

        </div>
    )
};

function Nesiya(){
    const values={
        name:"nesiya",
        age:"22",
        email:"nesiya04@gmail.com"
    };

    return(
        <Nesi a={values}/>
    )
}

export default Nesiya;