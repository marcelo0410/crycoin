import React, { useEffect, useState } from 'react'
import { fetchCoins } from '../../api/CoinGeckoAPI';

const Home = () => {

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

    useEffect(() => {
        fetchCoins().then(data => {setCoinData(data.data); console.log(data)});
    }, [])


  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="p-4">
                        <div className="flex items-center">
                            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Coin
                    </th>
                    {/* <th scope="col" className="px-6 py-3">
                        Photo
                    </th> */}
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        High_24hour
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Low_24hour
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {!(coinData.length) ? <tr><td>No coin data available</td></tr> : coinData.map(coin => (
                        <tr key={coin.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img 
                                src={coin.image}
                                alt={coin.name}
                                style={{height: '3px', width: '3px', paddingRight: '3px'}}/>{coin.name}
                            </th>
                            {/* <td className="px-6 py-4">
                                <img 
                                src={coin.image}
                                alt={coin.name}
                                style={{height: '20px', width: '20px', paddingRight: '20px'}}/>
                            </td> */}
                            <td className="px-6 py-4">
                                {coin.current_price}
                            </td>
                            <td className="px-6 py-4">
                                {coin.low_24h}
                            </td>
                            <td className="px-6 py-4">
                                {coin.high_24h}
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Trade</a>
                            </td> 
                        </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home