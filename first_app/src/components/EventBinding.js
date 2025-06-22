import React, { Component } from "react";

class EventBinding extends Component{
     constructor(){
        super()

        this.state={
            msg : "Hello"
        }

        // this only for Binding in class constructor
        // this.clickhandler=this.clickhandler.bind(this)
     }

    //  clickhandler(){
    //     this.setState({
    //         msg : "this is class event binding"
    //     })
    //  }

    // this is only for class property in arrow function
    clickhandler = ()=>{
        this.setState({
            msg : "this is class event binding"
        })  
     }


    render(){
        return(
            <>
            <div>Event Binding</div>
            <h1>{this.state.msg}</h1>
            {/* binding in render */}
            {/* <button onClick={this.clickhandler.bind(this)}>change msg</button> */}
            
            {/* Arrow function in render */}
            {/* <button onClick={()=>this.clickhandler()}>change msg</button> */}

            {/* Binding in class constructor */}
            {/* <button onClick={this.clickhandler}>change msg</button> */}

            {/* class property in arrow function */}
            <button onClick={this.clickhandler}>change msg</button>


            </>
        )
    }
}

export default EventBinding