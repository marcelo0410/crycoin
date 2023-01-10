import React, { useEffect, useState } from 'react'

import { fetchCoins } from '../../api/CoinGeckoAPI';
import { createTradeDetail } from '../../api/index';

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
    const [userAud, setUserAud] = useState<number>(0);
    const [convertedCoin, setConvertedCoin] = useState<number>(0);
    const [selectedCoin, setSelectedCoin] = useState<CoinResult>({} as CoinResult);

    useEffect(() => {
        fetchCoins().then(data => {setCoinData(data.data); console.log(data); filterCoin(data.data, 'tether')});
        
    }, [])

    const filterCoin = (data: Array<CoinResult>, targetCoin: string): void => {
        let selectedC = data.filter(item => {
            if(item.id === targetCoin) return item
        })[0];
        console.log(selectedC);
        setSelectedCoin(selectedC);
    }

    // utils?
    const calculateCoinQuan = (userInputAud: number) => {
        setUserAud(Number(userInputAud));
        setConvertedCoin(userAud/selectedCoin.current_price);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // createTradeDetail({userId: 1, coinId: selectedCoin.id, cost: userAud, coinPrice: selectedCoin.current_price, coinQuan: convertedCoin});
        createTradeDetail({userId: 1, coinId: 'tether', cost: userAud, coinPrice: selectedCoin.current_price, coinQuan: convertedCoin});
    }

  return (
    <div style={{width: '50%', justifyContent: 'center'}}>
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">AUD</label>
                <input type="text" id="username-success" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" value={userAud} onChange={e => calculateCoinQuan(Number(e.target.value))}/>
                {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p> */}
            </div>
            <div>
                <label htmlFor="username-error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Receive</label>
                <div id="username-error" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" >{convertedCoin}</div>
                {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops!</span> Username already taken!</p> */}
                <div>{selectedCoin.id} Current price: {selectedCoin.current_price}</div>
            </div>
            <button type='submit' >Buy</button>
        </form>
    </div>
  )
}

export default Trade