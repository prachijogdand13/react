import React from "react";
import Person from "./Person";
 

function Details(){
    const person=[
        {
            id : 11,
            name : "jhon",
            age : 21,
            course : "Reactjs"
        },
        {
            id : 12,
            name : "max",
            age : 23,
            course : "MERN"
        },
        {
            id : 13,
            name : "prince",
            age : 20,
            course : "MEAN"
        }
    ]
    const personlist= person.map((person)=>(
       <Person key={person.id} person={person}/>
    ))
    return(
        <>
        <div>Details</div>
        <h2>{personlist}</h2>
        </>
    )
}

export default Details