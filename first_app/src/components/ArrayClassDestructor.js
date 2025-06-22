import React, { Component } from "react";

class ArrayClassDestructor extends Component{
    constructor(){
        super()
        this.color = ['Red','Green','Blue'];
        [this.firstcolor,this.secondcolor,this.thirdcolor]= this.color
    }


    render(){
        return(
            <>
            <div>Array Class Destructor</div>
            <h3>first color: {this.firstcolor}</h3>
            <h3>second color: {this.secondcolor}</h3>
            <h3>third color: {this.thirdcolor}</h3>
            </>
        )
    }
}

export default ArrayClassDestructor