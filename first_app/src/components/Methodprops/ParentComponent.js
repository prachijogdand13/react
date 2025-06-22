import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component{
    constructor(){
        super()
        this.state={
            parentname :"john"
        }
        this.parentone = this.parentone.bind(this)
    }

    parentone(chiddata){
        // console.log(`hello ${this.state.parentname}`)
        alert(`hello ${this.state.parentname} from ${chiddata}`)
    }

    render(){
        return(
            <>
            <div><ChildComponent parenthandler={this.parentone}/></div>
            {/* <div>{this.parentone()}</div> */}
            {/* <div>{this.parentone()}</div> */}
            </>
        )
    }
}

export default ParentComponent