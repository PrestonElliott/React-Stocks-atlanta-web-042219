import React from 'react'

const Stock = (props) => (
  <div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.stock.name}</h5>
        <p className="card-text">{props.stock.ticker} - {props.stock.price}</p>
        {props.buyStock ? <button onClick={() => {props.buyStock(props.stock)}}> Buy Stock</button> : <button onClick={() => props.sellStock(props.stock)}> Sell Stock</button>} 
      </div>
    </div>
  </div>
);

export default Stock
