import React, { Component } from 'react';
import './App.css';
import Checkbox from'./Components/Checkbox';
import logo from './logo.svg';

const drinklist = [
  'Sprite',
  'Coke',
  'DrPepper',
  'Root Beer'
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount() {
    drinklist.forEach((el) => {
      this.setState({[el]: false})

    })
  }

  render() {

    const checkboxes = drinklist.map((el) => {
      return <Checkbox clicked={this.onCheckBoxClick} isChecked={this.state[el]} id={el}/>
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Place An Order</h1>
        </header>
        <p className="App-intro">
          Please select a beverage and fill out the form to receive your drink.
        </p>

       <div>{checkboxes}</div>
      </div>
    );
  }

  onCheckBoxClick = (e)=> {
    if(this.state[e.target.id] === false) {
      console.log("clicked new")
    } else {
      console.log("clicked old")

    }
    
    if (e.target.id === 'Sprite') {
      this.setState({Sprite: true})
      this.setState({Coke: false})
      this.setState({DrPepper: false})
    } 
    if(e.target.id === 'Coke') {
      this.setState({Coke: true})
      this.setState({Sprite: false})
      this.setState({DrPepper: false})
    }
    if(e.target.id === 'DrPepper') {
      this.setState({DrPepper: true})
      this.setState({Sprite: false})
      this.setState({Coke: false})
    }
    console.log(e.target.id);
    
  }
}

export default App;
