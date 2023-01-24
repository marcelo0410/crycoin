import React, { useEffect, useState } from 'react'
import { SettingOutlined } from '@ant-design/icons';
import { Cascader, InputNumber, Select, Space } from 'antd';

import { fetchCoins } from '../../api/CoinGeckoAPI';
import { createTradeDetail } from '../../api/index';
import { CoinResult } from '@/common/interfaces/interface';
import { DefaultOptionType } from 'antd/es/select';

const { Option } = Select;


const selectBefore = (
  <Select defaultValue="add" style={{ width: 60 }}>
    <Option value="add">+</Option>
    <Option value="minus">-</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue="USD" style={{ width: 60 }}>
    <Option value="USD">$</Option>
    <Option value="EUR">€</Option>
    <Option value="GBP">£</Option>
    <Option value="CNY">¥</Option>
  </Select>
);


const Trade: React.FC = () => {

    const [coinData, setCoinData] = useState<CoinResult[]>([]);
    const [userAud, setUserAud] = useState<number>(0);
    const [convertedCoin, setConvertedCoin] = useState<number>(0);
    const [selectedCoin, setSelectedCoin] = useState<CoinResult>({} as CoinResult);

    useEffect(() => {
        fetchCoins().then(data => {setCoinData(data.data)});
        
    }, [])

    const handleSelectCoin = (value: string, option: DefaultOptionType | DefaultOptionType[]) => {
      filterCoin(coinData, value);
      console.log(selectedCoin);
    }


    
    
    
    
    const mapCoinForSelectAfter = (fetchedCoinData: CoinResult[]) => {
      return (
        <Select defaultValue="Select" style={{ width: 140, height: 40, paddingTop:"5px", paddingLeft:"20px", fontSize:"10px" }} onChange={(value, option) => handleSelectCoin(value, option)}>
          {fetchedCoinData.map((coin) => (
            <Option value={coin.id} style={{paddingTop:"5px"}} key={coin.id}>
              <div style={{display:"flex"}}>
                <h3 style={{fontSize:"10px", paddingRight:"5px"}}>{coin.name}</h3>
                <img src={coin.image} alt={coin.name} style={{maxWidth:"25px", maxHeight:"25px", paddingTop:"5px"}}/>
              </div>
            </Option>
          ))}
        </Select>
      );
    };

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
    <Space direction="vertical">
        <InputNumber addonBefore="Price $" defaultValue={0} value={selectedCoin.current_price} addonAfter={mapCoinForSelectAfter(coinData)} size={"large"} readOnly={true}/>
        <InputNumber addonBefore="Amount" defaultValue={100} size={"large"} min={0} onChange={(value: number) => calculateCoinQuan(value)}/>
        <InputNumber addonBefore="Total" defaultValue={0} value={0} size={"large"} readOnly={true}/>
        <InputNumber
          addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} />}
          defaultValue={100}
        />
        <div>{selectedCoin.current_price}</div>
        <div>{selectBefore}</div>
  </Space>
  )
}

export default Trade