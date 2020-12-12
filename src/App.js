import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyType: 1,
      currencyValuesLeft: {},
      currencyValuesRight: {},
      currentlySelectedLeft: "CAD",
      currentlySelectedRight: "CAD",
      valueLeft: 1,
      valueRight: 1,
      regionCodeReturn: ["CAD","HKD","ISK","PHP","DKK","HUF","CZK","GBP","RON","SEK","IDR","INR","BRL","RUB","HRK","JPY","THB","CHF","EUR","MYR","BGN","TRY","CNY","NOK","NZD","ZAR","USD","MXN","SGD","AUD","ILS","KRW","PLN"]
    };
  }

  componentDidMount() {
    this.setDifferentBaseLeft(this.state.currentlySelectedLeft, 5)
    this.setDifferentBaseRight(this.state.currentlySelectedRight, 5)
  }

  setDifferentBaseLeft = (base, input) => {
    fetch('https://api.exchangeratesapi.io/latest?base=' + base)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          currencyValuesLeft: result
        }, ()=> {
          this.calculateNewValues(input);
        });

      },
      (error) => {
        console.log(error);
      }

    )

  }

  setDifferentBaseRight = (base, input) => {
    fetch('https://api.exchangeratesapi.io/latest?base=' + base)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          currencyValuesRight: result
        }, ()=> {
          this.calculateNewValues(input);
        });

      },
      (error) => {
        console.log(error);
      }

    )

  }

  calculateNewValues = (selected) => {
      if(selected === 1 || selected === 3) { //left currency changed
        this.setState({
          valueRight: (this.state.currencyValuesLeft.rates[this.state.currentlySelectedRight] * this.state.valueLeft)
        })
      }
      else if(selected === 2 || selected === 4) { //right currency changed
        this.setState({
          valueLeft: (this.state.currencyValuesRight.rates[this.state.currentlySelectedLeft] * this.state.valueRight)
        })
      }

  }

  recalculateCurrencyLeft = (evt) => {
      this.setState({
        valueLeft: evt.target.valueAsNumber,
      }, () => {
        this.calculateNewValues(1);
      });
  }

  recalculateCurrencyRight = (evt) => {
      this.setState({
        valueRight: evt.target.valueAsNumber,
      }, () => {
        this.calculateNewValues(2);
      });

  }

  recalculateCurrencyDropLeft = (evt) => {
      this.setState({
        currentlySelectedLeft: evt.target.value,
      }, () => {
        this.setDifferentBaseLeft(this.state.currentlySelectedLeft, 3);
      });
  }

  recalculateCurrencyDropRight = (evt) => {
      this.setState({
        currentlySelectedRight: evt.target.value,
      }, () => {
        this.setDifferentBaseRight(this.state.currentlySelectedRight, 4);
      });
  }

  render () {
    return (
      <div className="App">
        <select name="currency1" id="currency1" value={this.state.currentlySelectedLeft} onChange={this.recalculateCurrencyDropLeft}>
          {
            this.state.regionCodeReturn.map(code1 => <option value={code1} key={code1}>{code1}</option>)
          }
        </select>
        <input type="number" onChange={this.recalculateCurrencyLeft} value={this.state.valueLeft} id="1" min="0"></input>
        <input type="number" onChange={this.recalculateCurrencyRight} value={this.state.valueRight} id="2" min="0"></input>
        <select name="currency2" id="currency2" value={this.state.currentlySelectedRight} onChange={this.recalculateCurrencyDropRight}>
          {
            this.state.regionCodeReturn.map(code1 => <option value={code1} key={code1}>{code1}</option>)
          }
        </select>
        <p>*Rates may not be entirely accurate because of the API</p>
      </div>
    )
  }
}

export default App;
