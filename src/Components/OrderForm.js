import React, { Component } from "react";

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            last: '',
            seat: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
        };
   
    render() {
        return(
            <div className="orderListMain">
                <div className="header">
                    <form onSubmit={this.handleChange}>
                        <input type="text" name="first" onChange={this.handleChange} placeholder="First name">
                        </input>< br/>
                        <input type="text" name="last" onChange={this.handleChange} placeholder="Last name">
                        </input>< br/>
                        <input type="text" name="seat" onChange={this.handleChange} placeholder="Seat number">
                        </input>< br/>
                        <button type="submit">Order</button>
                    </form>
                </div>
            </div>
        )
        
    }
}
export default OrderForm;