
import React, { Component } from "react";
import PropTypes from 'prop-types'

class TypeProps extends Component{
    render(){
        const {myName,myNumber,value} = this.props
        return(
            <>
            <div>my name is {myName}</div>
            <div>my age is {myNumber}</div>
            <div>Array is {value}</div>

            </>
        )
    }
}

TypeProps.propTypes = {
    myName : PropTypes.string.isRequired,
    myNumber : PropTypes.number.isRequired,
    value : PropTypes.array.isRequired
}

export default TypeProps