import React, { Component } from "react";

class UserCondition extends Component{
    constructor(props){
        super(props)
        // for if else
        // this.state={
        //     age : 20
        // }

        // element variable and ternAry operator
        this.state={
            login : false
        }
    }


    render(){

        // if else
        // if(this.state.age>18){
        //     const a = this.state.age **2
        //      return(
        //         <>
        //         <div>{a}</div>
        //          <div>User Condition</div>
        //          </>
        //       )
        // }else{
        //     return(
        //         <div>hello world....</div>
        //        )
        //     }


        // element variable
        //     let text;
        // if(this.state.login){
        //          text = <div>User Condition</div>
        // }else{
        //         text = <div>hello world....</div>
        //     }
        //     return(<h1>{text}</h1>)

        // ternAry operator
        // return this.state.login ?(
        //     <h2>ternary operator</h2>
        // ):
        // (
        //     <h2>this is false value</h2>
        // )

        // short circuit operator only for true part
        return this.state.login && <h2>login successfull</h2>

    }
}

export default UserCondition