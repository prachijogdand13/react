import React from "react";
 

function ChildComponent(props){
    
    return(
        <>
        <div>Child Component</div>
        <button onClick={props.parenthandler("child component")}>click me</button>
        </>
    )
}

export default ChildComponent