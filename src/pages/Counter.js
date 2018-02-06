import React, {Component} from "react";

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                <h1>Counter Page</h1>
                <p>current count: {this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>plus</button>
                <button onClick={() => this.setState({count: this.state.count - 1})}>minus</button>
            </div>
        )
    }
}

export default Counter;