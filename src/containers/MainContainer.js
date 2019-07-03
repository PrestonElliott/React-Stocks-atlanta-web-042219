import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state={
    stocks: [],
    boughtStocks: [],
    filterStockArr: []
  }

  componentDidMount() {
    {fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(data => this.setState({stocks: data, filterStockArr: data}))}
  }

  buyStock = (stock) => {
    this.setState({
      ...this.state,
      boughtStocks: [...this.state.boughtStocks, stock]
    })
  }

  sellStock = (stockObj) => {
    let newBoughtStocks = this.state.boughtStocks.filter(stock => stock.id !== stockObj.id )
    this.setState({boughtStocks: newBoughtStocks})
  }

  filterStocks = (e) => {
    // console.log(e)
    this.setState({filterStockArr: this.state.stocks.filter(stock => stock.type === e.target.value)})
  }



  render() {
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.filterStockArr}  buyStock={this.buyStock} />

            </div>
            <div className="col-4">

              <PortfolioContainer boughtStocks={this.state.boughtStocks} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
