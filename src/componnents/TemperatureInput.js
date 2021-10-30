import React, { Component } from 'react'


const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

class TemperatureInput extends Component {

    constructor(props){
        super(props);
        this.handlerF = this.handlerF.bind(this);
    }
    
    handlerF(e){
        this.props.onTemperatureChange(e.target.value);
    }
    
    render() {

        const tmp = this.props.temperature;
        const scale = this.props.scale

        return (
            <div>
                <fieldset>
                        <legend>Enter the temperatur on {scaleNames[scale]} :</legend>
                        <input type="text" value={tmp} onChange={this.handlerF} />
                </fieldset>                
            </div>
        )
    }
}

export default TemperatureInput