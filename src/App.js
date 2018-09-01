import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      submit: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInput(e) {
    this.setState({
      input: e.target.value
    })
  }
  
  handleSubmit(e) {
   let convertToRoman = (num) => {
      
 let romanArr = num.split('');
      
 if(romanArr.length === 1) {
   switch(num) {
     case '0':
       romanArr[0] = ''
       break;
     case '1':
       romanArr[0] = 'I'
       break;
     case '2':
       romanArr[0] = 'II'
       break;
     case '3':
       romanArr[0] = 'III'
       break;
     case '4':
       romanArr[0] = 'IV'
       break;
     case '5':
       romanArr[0] = 'V'
       break;
     case '6':
       romanArr[0] = 'VI'
       break;
     case '7':
       romanArr[0] = 'VII'
       break;
     case '8':
       romanArr[0] = 'VIII'
       break;
     case '9':
       romanArr[0] = 'IX'
       break;
   }
 }
  
  else if(romanArr.length === 2) {
    switch(romanArr[1]) {
     case '0':
       romanArr[1] = ''
       break;
     case '1':
       romanArr[1] = 'I'
       break;
     case '2':
       romanArr[1] = 'II'
       break;
     case '3':
       romanArr[1] = 'III'
       break;
     case '4':
       romanArr[1] = 'IV'
       break;
     case '5':
       romanArr[1] = 'V'
       break;
     case '6':
       romanArr[1] = 'VI'
       break;
     case '7':
       romanArr[1] = 'VII'
       break;
     case '8':
       romanArr[1] = 'VIII'
       break;
     case '9':
       romanArr[1] = 'IX'
   }
    switch(romanArr[0]) {
     case '0':
       romanArr[0] = ''
       break;
     case '1':
       romanArr[0] = 'X'
       break;
     case '2':
       romanArr[0] = 'XX'
       break;
     case '3':
       romanArr[0] = 'XXX'
       break;
     case '4':
       romanArr[0] = 'XL'
       break;
     case '5':
       romanArr[0] = 'L'
       break;
     case '6':
       romanArr[0] = 'LX'
       break;
     case '7':
       romanArr[0] = 'LXX'
       break;
     case '8':
       romanArr[0] = 'LXXX'
       break;
     case '9':
       romanArr[0] = 'XC'
    }
  }
  
  else if(romanArr.length === 3) {
    switch(romanArr[2]) {
     case '0':
       romanArr[2] = ''
       break;
     case '1':
       romanArr[2] = 'I'
       break;
     case '2':
       romanArr[2] = 'II'
       break;
     case '3':
       romanArr[2] = 'III'
       break;
     case '4':
       romanArr[2] = 'IV'
       break;
     case '5':
       romanArr[2] = 'V'
       break;
     case '6':
       romanArr[2] = 'VI'
       break;
     case '7':
       romanArr[2] = 'VII'
       break;
     case '8':
       romanArr[2] = 'VIII'
       break;
     case '9':
       romanArr[2] = 'IX'
    }
    
    switch(romanArr[1]) {
     case '0':
       romanArr[1] = ''
       break;
     case '1':
       romanArr[1] = 'X'
       break;
     case '2':
       romanArr[1] = 'XX'
       break;
     case '3':
       romanArr[1] = 'XXX'
       break;
     case '4':
       romanArr[1] = 'XL'
       break;
     case '5':
       romanArr[1] = 'L'
       break;
     case '6':
       romanArr[1] = 'LX'
       break;
     case '7':
       romanArr[1] = 'LXX'
       break;
     case '8':
       romanArr[1] = 'LXXX'
       break;
     case '9':
       romanArr[1] = 'XC'    
    }
    
    switch(romanArr[0]) {
         case '0':
       romanArr[0] = ''
       break;
     case '1':
       romanArr[0] = 'C'
       break;
     case '2':
       romanArr[0] = 'CC'
       break;
     case '3':
       romanArr[0] = 'CCC'
       break;
     case '4':
       romanArr[0] = 'CD'
       break;
     case '5':
       romanArr[0] = 'D'
       break;
     case '6':
       romanArr[0] = 'DC'
       break;
     case '7':
       romanArr[0] = 'DCC'
       break;
     case '8':
       romanArr[0] = 'DCCC'
       break;
     case '9':
       romanArr[0] = 'CM'
    }
  }
  
  else if(romanArr.length === 4) {
    switch(romanArr[3]) {
        case '0':
       romanArr[3] = ''
       break;
     case '1':
       romanArr[3] = 'I'
       break;
     case '2':
       romanArr[3] = 'II'
       break;
     case '3':
       romanArr[3] = 'III'
       break;
     case '4':
       romanArr[3] = 'IV'
       break;
     case '5':
       romanArr[3] = 'V'
       break;
     case '6':
       romanArr[3] = 'VI'
       break;
     case '7':
       romanArr[3] = 'VII'
       break;
     case '8':
       romanArr[3] = 'VIII'
       break;
     case '9':
       romanArr[3] = 'IX'
    }
    
    switch(romanArr[2]) {
        case '0':
       romanArr[2] = ''
       break;
     case '1':
       romanArr[2] = 'X'
       break;
     case '2':
       romanArr[2] = 'XX'
       break;
     case '3':
       romanArr[2] = 'XXX'
       break;
     case '4':
       romanArr[2] = 'XL'
       break;
     case '5':
       romanArr[2] = 'L'
       break;
     case '6':
       romanArr[2] = 'LX'
       break;
     case '7':
       romanArr[2] = 'LXX'
       break;
     case '8':
       romanArr[2] = 'LXXX'
       break;
     case '9':
       romanArr[2] = 'XC'  
    }
    
    switch(romanArr[1]) {
        case '0':
       romanArr[1] = ''
       break;
     case '1':
       romanArr[1] = 'C'
       break;
     case '2':
       romanArr[1] = 'CC'
       break;
     case '3':
       romanArr[1] = 'CCC'
       break;
     case '4':
       romanArr[1] = 'CD'
       break;
     case '5':
       romanArr[1] = 'D'
       break;
     case '6':
       romanArr[1] = 'DC'
       break;
     case '7':
       romanArr[1] = 'DCC'
       break;
     case '8':
       romanArr[1] = 'DCCC'
       break;
     case '9':
       romanArr[1] = 'CM'
    }
    
    switch(romanArr[0]) {
     case '0':
       romanArr[0] = ''
       break;
     case '1':
       romanArr[0] = 'M'
       break;
     case '2':
       romanArr[0] = 'MM'
       break;
     case '3':
       romanArr[0] = 'MMM'
    }
  }
      
  return romanArr.join('');
      
}
    this.setState({
      submit: convertToRoman(this.state.input)
    })
    e.preventDefault();
  }
  
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>  
          <input 
            type='number'
            min='1'
            max='3999'
            value={this.state.input}
            onChange={this.handleInput}
            required />
          <button 
            type='submit'>
            Convert
          </button>
        </form>
          <div 
            className='result'
            onClick={this.handleSubmit}>
            {this.state.submit}
          </div>
      </div>)
  }
}

export default App;
