import React, { useState } from 'react'
import { useEffect } from 'react'
import { getCoin } from '../services/api'
import Loader from './loader/Loader'
import Coin from './coin/Coin'

import styles from './Landing.module.css'

function Landing() {

    const [coins, setCoins] = useState([])
    const [search , setSearch] = useState("")

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin()
            setCoins(data)
            console.log(data)
        }
        fetchAPI()
    }, [])

    const searchHandler = (event) => {
        setSearch(event.target.value)
    }

    const searched = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div >
            <input className={styles.search_bar} type="text" placeholder='Search...' value={search} onChange={searchHandler} />
            {
                coins.length ?
                    <div className={styles.container}>
                        {
                            searched.map(coin => <Coin
                                    key={coin.id}
                                    name={coin.name}
                                    symbol={coin.symbol}
                                    image={coin.image}
                                    price={coin.current_price}
                                    priceChange={coin.price_change_percentage_24h}
                                    marketCap={coin.market_cap}
                                />)
                        }
                    </div> :
                    <Loader />
            }

        </div>
    )
}

export default Landing