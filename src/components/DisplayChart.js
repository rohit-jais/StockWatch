import React, { Component } from 'react';
import Chart from "react-google-charts";

export default class DisplayChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartDataPoints: [],
      minValue : ''
    }
  }

  handelChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }
  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const API_KEY = 'ZPQN5M5TAJJXR1ZX';
    let stockName = this.props.match.params.sym;
    
    console.log(stockName)
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockName}&interval=5min&outputsize=full&apikey=${API_KEY}`;
    let ch = []

    fetch(API_Call)
      .then(
        function (response) {
          return response.json();
        }
      )
      .then(
        function (data) {

          for (var key in data['Time Series (5min)']) {
            // ch.push(key);
            ch.push([key.split(' ')[1], Number(data['Time Series (5min)'][key]['1. open']), Number(data['Time Series (5min)'][key]['2. high']), Number(data['Time Series (5min)'][key]['3. low']), Number(data['Time Series (5min)'][key]['4. close'])]);
          }
          return ch
        }
      ).then(() => {
        this.setState({
          chartDataPoints: ch
        })

      })
  }


  render() {
    let len = this.state.chartDataPoints.length
    console.log(this.state.minValue)
    return (
      <div>
        <div className='h1 text-center'>Chart</div>
        <select name='minValue' onChange={this.handelChange} value={this.state.minValue} >
          <option value="5min">5 MIN</option>
          <option value="10min">10 MIN</option>
          <option value="15min">15 MIN</option>
          <option value="30min">30 MIN</option>
          <option value="60min">60 MIN</option>
        </select>
        <Chart
          width={'100%'}
          height={950}
          chartType="CandlestickChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['day', 'a', 'b', 'c', 'd'],
            ...this.state.chartDataPoints,
          ]}
          options={{
            legend: 'none',
            bar: { groupWidth: '100%' }, // Remove space between bars.
            candlestick: {
              fallingColor: { strokeWidth: 5, fill: '#a52714' }, // red
              risingColor: { strokeWidth: 5, fill: '#0f9d58' }, // green
            },
          }}
          rootProps={{}}
        />
      </div>
    )
  }
}
