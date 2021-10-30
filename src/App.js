import './App.css';
import BoilingVerdict from './componnents/BoilingVerdict';
import TemperatureInput from './componnents/TemperatureInput';
import React, { Component } from 'react'

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      tmp : "",
      scale : "c"
    };

    this.hundlerCelsiusChange = this.hundlerCelsiusChange.bind(this);
    this.hundlerFahrenheitChange = this.hundlerFahrenheitChange.bind(this);
  }

  hundlerCelsiusChange = (tmp) => {
    this.setState({scale : 'c' , tmp})
  } 

  hundlerFahrenheitChange = (tmp) => {
    this.setState({scale : 'f' , tmp})
  }

  render() {

    const scale = this.state.scale;
    const tmp = this.state.tmp;
    const celsius = scale === 'f' ? tryConvert(tmp, toCelsius) : tmp;
    const fahrenheit = scale === 'c' ? tryConvert(tmp , toFahrenheit) : tmp;

    return (
      <>
          <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.hundlerCelsiusChange} />
          <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.hundlerFahrenheitChange} />
          <BoilingVerdict celsius={parseFloat(celsius)} />
      </>
    )
  }
  
}

export default App;