
import React, { Component } from "react";

class Welcome extends Component{
    render(){
        return(
            <>
            <div>Welcome component</div>
            <div>my name is {this.props.name} and my skills are {this.props.course}</div>
            </>
            )
    }
}

export default Welcome
