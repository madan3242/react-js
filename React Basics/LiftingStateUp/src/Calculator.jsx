import React, { Component } from 'react';
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}
function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>The water would boil</p>
    }
    return <p>The water would not boil</p>
}

class TempratureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.state = {
        //     temprature: "",
        // }
    }
    handleChange(e){
        // this.setState({temprature: e.target.value});
        this.props.onTempratureChange(e.target.value);
    }
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <pre>{JSON.stringify(this.props)}</pre>
                <legend>Enter temprature in Celsius {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
    return (celsius - 32) * 5 / 9;
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

class Calculator extends Component{
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {
            temperature: '',
            scale: 'c'
        };
    }
    handleCelsiusChange(temperature){
        this.setState({
            scale: 'c', 
            temperature
        });
    }
    handleFahrenheitChange(temperature){
        this.setState({
            scale: 'f', 
            temperature
        });
    }
    render(){
        const scale = this.state.scale;
        const temprature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temprature, toCelsius) : temprature;
        const fahrenheit = scale === 'c' ? tryConvert(temprature, toFahrenheit) : temprature;

        return(
            <div>
                <TempratureInput 
                    scale="c"
                    temperature={celsius}
                    onTempratureChange={this.handleCelsiusChange} 
                />
                <TempratureInput scale="f" 
                    temperature={fahrenheit}
                    onTempratureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict
                    celsius={parseFloat(celsius)}
                />
            </div>
        )
    }
}

export default Calculator;