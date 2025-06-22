import React, { Component } from "react";

class EventClass extends Component{
    Clickhandler(){
        console.log("User clicked on button")
    }

    render(){
        return(
            <>
            <div>Event class</div>
            <button onClick={this.Clickhandler}>click me</button>
            </>
        )
    }
}

export default EventClass