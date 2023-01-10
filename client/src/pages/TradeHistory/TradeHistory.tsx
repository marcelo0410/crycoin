import React, {useEffect, useState} from 'react'
import { fetchTradeDetail } from '../../api'

const TradeHistory = () => {


	interface TradeRecord {
		tradeId: number,
		userId: number,
		coinId: string,
		cost: number,
		coinPrice: number,
		coinQuan: number,
		tradedAt: Date
	}

	useEffect( () => {
	  const fetchData = async () => {
		const result = await fetchTradeDetail();
		console.log(result.data);
		setTradeHistoryData(result.data);
	  };
  
	  fetchData();
	}, [])

	const [tradeHistoryData, setTradeHistoryData] = useState<TradeRecord[]>([]);
	


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
                        record
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
                {!(tradeHistoryData.length) ? <tr><td>No record data available</td></tr> : tradeHistoryData.map(record => (
                        <tr key={record.tradeId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								{record.coinId}
                            </th>
                            {/* <td className="px-6 py-4">
                                <img 
                                src={record.image}
                                alt={record.name}
                                style={{height: '20px', width: '20px', paddingRight: '20px'}}/>
                            </td> */}
                            <td className="px-6 py-4">
                                {record.cost}
                            </td>
                            <td className="px-6 py-4">
                                {record.coinPrice}
                            </td>
                            <td className="px-6 py-4">
                                {record.coinQuan}
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

export default TradeHistory