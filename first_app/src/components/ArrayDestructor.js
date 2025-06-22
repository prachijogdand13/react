import React from "react";
 

function ArrayDestructor(){
    const color = ["Red","Green","Blue"]
    const [firstcolor,secondcolor,thirdcolor]= color
    return(
        <>
        <div>Array Destructor</div>
        <h3>first color: {firstcolor}</h3>
        <h3>second color: {secondcolor}</h3>
        <h3>third color: {thirdcolor}</h3>
        </>
    )
}

export default ArrayDestructor