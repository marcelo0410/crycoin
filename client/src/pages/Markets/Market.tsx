import React, { useEffect, useState } from 'react'
import { fetchCoins } from '../../api/CoinGeckoAPI';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { CoinResult } from '@/common/interfaces/interface';
import { getNumberFormat } from '../../common/util/calculation';


const columns: ColumnsType<CoinResult> = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: {
      compare: (a, b) => a.name.localeCompare(b.name)
    },
    render: (text, record) => {
        return (
            <div style={{display:'flex', maxWidth:"50%"}}>
                <img style={{maxHeight:"30px", paddingRight:"12px", paddingTop:"10px"}} src={record.image} alt={record.name}></img>
                <h3>{record.name}</h3>
            </div>
        )
    }
  },
  {
    title: 'Price',
    dataIndex: 'current_price',
    sorter: {
      compare: (a, b) => a.current_price - b.current_price,
    //   multiple: 3,
    },
  },
  {
    title: 'Price Change',
    dataIndex: 'price_change_percentage_24h',
    sorter: {
      compare: (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h,
    //   multiple: 2,
    },
    render: (text, record) => {
        return {
            props: {
                style: {color: record.price_change_24h > 0 ? "green" : "red" }
            },
            children: <div>{text}%</div>
        }
    }
  },
  {
    title: 'Market Cap',
    dataIndex: 'market_cap',
    sorter: {
      compare: (a, b) => a.market_cap - b.market_cap,
    //   multiple: 1,
    },
    render: (text, record) => {
        return (
            <div>{getNumberFormat(record.market_cap)}</div>
        )
    }
  },
];


const onChange: TableProps<CoinResult>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const App: React.FC = () => {

    const [coinData, setCoinData] = useState<CoinResult[]>([]);

    useEffect(() => {
        fetchCoins().then(data => {setCoinData(data.data); console.log(data)});
    }, [])

    return (
        <Table columns={columns} dataSource={coinData} onChange={onChange} />
    )
}


export default App;