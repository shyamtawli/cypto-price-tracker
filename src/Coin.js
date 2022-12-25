import React from 'react'
import './Coin.css'; 

function Coin({ name, image, symbol, price, volume, priceChange, marketCap}) {
  return (
    <div className='container'>
        <div className='row'>
            <div className='coin'>
                <img src={image} />
                <h1>{name}</h1>
                <p className='symbol'>{symbol}</p>
            </div>
            <div className='data'>
                <p className='price'>{price} INR</p>
                <p className='volume'>{volume.toLocaleString()} INR</p>
                {priceChange < 0 ? 
                    (<p className='red'>{priceChange.toFixed(2)}%</p>) : 
                    (<p className='green'>{priceChange.toFixed(2)}%</p>)
                }
                <p className='market-cap'>
                    Mkt Cap : {marketCap.toLocaleString()} INR
                </p>
            </div>
        </div>

    </div>
  )
}

export default Coin
