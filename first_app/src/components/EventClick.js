import React from "react"; 

function EventClick(){
    function Clickhandler(){
        console.log("user clicked on botton")
    }
    return(
        <>
        <div>Event Click</div>
        <button onClick={Clickhandler}>click me</button>
        </>
    )
}

export default EventClick