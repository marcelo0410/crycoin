import React, { useEffect, useState } from 'react'

import { fetchCoins } from '../../api/CoinGeckoAPI';

const Trade = () => {

    interface CoinResult {
        ath: number,
        ath_change_percentage: number,
        ath_date: string,
        atl: number,
        atl_change_percentage: number,
        atl_date: string,
        circulating_supply: number,
        current_price: number,
        fully_diluted_valuation: number,
        high_24h: number,
        id: string,
        image: string,
        last_updated: string,
        low_24h: number,
        market_cap: number,
        market_cap_change_24h: number,
        market_cap_change_percentage_24h: number,
        market_cap_rank: number,
        max_supply: number,
        name: string,
        price_change_24h: number,
        price_change_percentage_24h: number,
        roi: any,
        symbol: string,
        total_supply: number,
        total_volume: number
    }

    const [coinData, setCoinData] = useState<CoinResult[]>([]);
    const [selectedCoin, setSelectedCoin] = useState<CoinResult>({});

    useEffect(() => {
        fetchCoins().then(data => {setCoinData(data.data); console.log(data);});
        
    }, [])

    const filterCoin = (data: Array<CoinResult> ) => {
        data.filter(item => {
            if(item.id === 'btc') return item;
        }) 
    }

  return (
    <div style={{width: '50%', justifyContent: 'center'}}>
        <div className="mb-6">
            <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">AUD</label>
            <input type="text" id="username-success" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="0"/>
            {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p> */}
        </div>
        <div>
            <label htmlFor="username-error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Receive</label>
            <input type="text" id="username-error" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" placeholder="0"/>
            {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops!</span> Username already taken!</p> */}
        </div>
    </div>
  )
}

export default Trade