import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state = {
            msg : "Welcome to javascript"
        }
    }

    changeMsg(){
        this.setState({
            msg : "welcome to react js"
        })
    }
    render(){
        return(
            <>
            <div>{this.state.msg}</div>
            <button onClick={()=>{this.changeMsg()}}>click me</button>
            </>
        )
    }
}

export default Message