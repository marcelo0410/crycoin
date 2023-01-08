import React, { useEffect, useState } from 'react'
import { fetchCoins } from '../../api/CoinGeckoAPI';


const Test = () => {

    const [coinData, setCoinData] = useState(0);

  useEffect(() => {
    fetchCoins().then(data => {setCoinData(data.data); console.log(data)});
  }, [])
  
  

  return (
    
    <div>
        <table className="border-collapse border border-slate-400">
            <thead>
                <tr>
                    <th className="border border-slate-300">Name</th>
                    <th className="border border-slate-300">photo</th>
                    <th className="border border-slate-300">Current Price</th>
                    <th className="border border-slate-300">Low_24h</th>
                    <th className="border border-slate-300">High_24h</th>
                </tr>
            </thead>
            <tbody>
                {!coinData.length ? <tr><td>123</td></tr> : coinData.map(coin => (
                    <tr key={coin.id}> 
                        <td>{coin.name}</td>
                        <td style={{height: '20px', width: '20px', paddingRight: '20px'}}>
                            <img 
                              src={coin.image}
                              alt={coin.name}></img>
                        </td>
                        <td>{coin.current_price}</td>
                        <td>{coin.low_24h}</td>
                        <td>{coin.high_24h}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Test