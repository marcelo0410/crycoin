import React, {useEffect, useState} from 'react'
import { fetchTradeDetail } from '../../api'

import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

interface TradeRecord {
    tradeId: number,
    userId: number,
    coinId: string,
    cost: number,
    coinPrice: number,
    coinQuan: number,
    tradedAt: Date
}

const columns: ColumnsType<TradeRecord> = [
  {
    title: 'Name',
    dataIndex: 'coinId',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
    key: 'cost',
	render: (aud) => <>${aud}</>
  },
  {
    title: 'Purchase price',
    dataIndex: 'coinPrice',
    key: 'coinPrice',
  },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
  {
    title: 'Quantity',
    dataIndex: 'coinQuan',
    key: 'coinQuan',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
		<a>Detail</a>
    //   <Space size="middle">
    //     <a>Invite {record.userId}</a>
    //     <a>Delete</a>
    //   </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];


const TradeHistory: React.FC = () => {
	const [tradeHistoryData, setTradeHistoryData] = useState<TradeRecord[]>([]);

	useEffect( () => {
	  const fetchData = async () => {
		const result = await fetchTradeDetail();
		console.log(result.data);
		setTradeHistoryData(result.data);
	  };
	  fetchData();
	}, [])

	return (
		<div>
			{!(tradeHistoryData.length) ? <tr><td>No record data available</td></tr> : <Table columns={columns} dataSource={tradeHistoryData} />}
		</div>
	)
}

export default TradeHistory