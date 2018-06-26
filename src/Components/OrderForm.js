import React, { Component } from "react";

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value})
        //console.log(e.target.value);
    }
      
    render() {
        return(
            <div className="orderListMain">
                <div className="header">
                    <form >
                        <input type="text" name="value" value={this.state.value} onChange={this.handleChange} placeholder="First name">
                        </input>< br/>
                        <input type="text" name="value" onSubmit={this.state.value} onChange={this.handleChange} placeholder="Last name">
                        </input>< br/>
                        <input type="text" name="value" onSubmit={this.state.value} onChange={this.handleChange} placeholder="Seat Number">
                        </input>< br/>
                        <input type="submit" value="Order" onSubmit={this.props.handleSubmit} />
                    </form>
                </div>
            </div>
        )
        
    }
}
export default OrderForm;