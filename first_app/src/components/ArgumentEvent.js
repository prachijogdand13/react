import React from "react"; 

function ArgumentEvent(){
   const msg= (a)=>{
        alert('welcome '+a)
    }
    return(
        <>
        <div>Argument Event</div>
        <button onClick={()=>msg('mern stack')}>course</button>
        </>
    )
}

export default ArgumentEvent