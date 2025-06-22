import React, { Component } from "react";


class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0
        }
    }
    changecount(){
        this.setState({
        count : this.state.count+1
        })
    }
    render(){
        return(
            <>
            <div>Counter : {this.state.count}</div>
            <button onClick={()=>{this.changecount()}}>change count</button>
            </>
        )
    }
}

export default Counter