import React from 'react'
import Sidebar from '../../components/layout/Sidebar'
import TradeHistory from '../TradeHistory/TradeHistory'

const Dashboard = () => {
  return (
    <div className='d-flex'>
        <Sidebar></Sidebar>
        <TradeHistory></TradeHistory>
    </div>
  )
}

export default Dashboard