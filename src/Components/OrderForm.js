import React, { Component } from "react";

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: ''
        };
    }
 
    render() {
        return(
            <div className="orderListMain">
                <div className="header">
                    <form onSubmit={this.props.onSubmit}>
                        <input type="text" value={this.state.firstName} placeholder="First name">
                        </input>
                        < br/>
                        <input type="text" value={this.state.lastName} placeholder="Last name">
                        </input>
                        < br/>
                        <input type="text" value={this.state.seatNumber} placeholder="Seat Number">
                        </input>
                        < br/>
                        <input type="submit" value="Order"  />
                    </form>
                </div>
            </div>
        )
        
    }
}
export default OrderForm;