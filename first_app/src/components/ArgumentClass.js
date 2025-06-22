import React, { Component } from "react";

class ArgumentClass extends Component{
     msg= (a,b)=>{
        alert('welcome '+a)
        alert(b.type)
    }

    render(){
        return(
            <>
            <div>Argument Class</div>
            <button onClick={(event)=>this.msg('mern stack',event)}>course</button>
            </>
        )
    }
}

export default ArgumentClass