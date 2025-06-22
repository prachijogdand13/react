import React from "react";
 

function Person({person}){
    
    return(
        <>
        <div> <h3>my name is {person.name} i am {person.age} years old.
         my id is {person.id} and my course is {person.course}</h3></div>
        </>
    )
}

export default Person