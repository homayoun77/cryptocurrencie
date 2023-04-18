import React from 'react'
import styles from './Coin.module.css'

function Coin({name, image, symbol, price, priceChange, marketCap}) {
  return (
    <div className={styles.coin_container}>
        <img className={styles.image} src={image} alt={name} />
        <span className={styles.name}>{name}</span>
        <span className={styles.symbol}>{symbol.toUpperCase()}</span>
        <span className={styles.price}>$ {price.toLocaleString()}</span>
        <span className={ priceChange > 0 ? styles.green_price_change : styles.red_price_change}>{priceChange.toFixed(2)}</span>
        <span className={styles.market_cap}>$ {marketCap.toLocaleString()}</span>
    </div>
  )
}

export default Coin