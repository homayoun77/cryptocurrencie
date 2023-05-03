import React from 'react'
// import styles from './Coin.module.css'

function Coin({name, image, symbol, price, priceChange, marketCap}) {
  return (
    <div className="flex px-3 py-6 border-b last:border-none w-[380px] text-xs text-white md:w-[600px] md:text-base md:p-6 ">
        <img className="w-6 mr-2 md:w-8" src={image} alt={name} />
        <span className="w-[65px] md:w-[100px]  text-left">{name}</span>
        <span className="w-[40px] md:w-[70px]  text-left">{symbol.toUpperCase()}</span>
        <span className="w-[65px] md:w-[100px]  text-left">$ {price.toLocaleString()}</span>
        <span className={ priceChange > 0 ? 'w-[60px] md:w-[80px]  text-left text-green-600' : 'w-[60px]  md:w-[80px] text-left text-red-600'}>{priceChange}</span>
        <span className="w-[110px] md:w-[130px]  text-left">$ {marketCap.toLocaleString()}</span>
    </div>
  )
}

export default Coin