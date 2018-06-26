import React, { Component } from 'react';
import './App.css';
import Checkbox from'./Components/Checkbox';
import OrderForm from'./Components/OrderForm';
import logo from './logo.svg';
import Sprite from './spritepic.png'
import Coke from './cokepic.png'
import DrPepper from './drpepperpic.png'
import RootBeer from './rootbeerpic.png'

const drinklist = [
  'Sprite',
  'Coke',
  'Dr Pepper',
  'Root Beer'
]

const imagelist = [
  Sprite,
  Coke,
  DrPepper,
  RootBeer
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onSubmit: false
    }
  }

  componentWillMount() {
    drinklist.forEach((el) => {
      this.setState({[el]: false})

    })
  }

  onSubmit = (e) => {
    if(this.state[e.onSubmit]===false)
      this.setState({onSubmit: true})
  }

  render() {

    const checkboxes = drinklist.map((el,i) => {
      return (
      <div className='flex-img' key={i}>
        <img src= {imagelist[i]} alt={el}/>
        <Checkbox clicked={this.onCheckBoxClick} isChecked={this.state[el]} id={el}/>
      </div>
    )})

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Place An Order</h1>
        </header>
        <p className="App-intro">
          Please select a beverage and fill out the form to receive your drink.
        </p>
        <div className='flex-container'>
          {checkboxes}
        </div>
        <div>
          <OrderForm onSubmit={this.onSubmit}/>
        </div>
        <div>
          <p></p>
          </div>
      </div>
    );
  }

  //function called on checkbox click
  onCheckBoxClick = (e)=> {
    //the checkbox that was clicked, was previously unchecked
    if(this.state[e.target.id] === false) {
            //before toggling the checkbox, check all other checkboxes to make sure theyre also unchecked
            for (var key in this.state) {
                  //if we found a checkbox that is checked, then uncheck it
                  if (this.state[key] === true) {
                    //uncheck it here
                    this.setState({
                      [key]: false
                    })
                  }
            }
            //now that we have made sure nothing else is checked, toggle the currently clicked check box
            this.setState({[e.target.id]: true})
            //go through app state, look for any drink that is true, and set to false
    //the checkbox that was clicked, was previously checked and same thing was checked
    } else {
            this.setState({[e.target.id]: false})
    }
    console.log(e.target.id)
  }

  handleSubmit = (e)=> {
    //this.setState({value: e.target.value});
  
  
     console.log(e.target.value);
     //e.preventDefault();
  }
}

export default App;
