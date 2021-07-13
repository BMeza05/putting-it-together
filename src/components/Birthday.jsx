import React, { Component } from "react";

class Birthday extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 30,
            clickTimes: []
        }
    }
    handleClick = () => {
        let newArr = [...this.state.clickTimes]
        newArr.push(new Date())
        this.setState({
            count : this.state.count + 1,
            clickTimes : newArr
        })
    }

    render(){
        return(
            <div>
                <h1>Ferris Bueller</h1>
                <p>Age: {this.state.count} </p>
                <h1>Hair color: Black</h1>
                <button onClick={this.handleClick}>Birthday Button for Ferris Bueller</button>
            </div>
        )
    }


}

export default Birthday;