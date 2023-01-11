import Sidebar from './components/layout/Sidebar.tsx';
import Test from './components/test/Test';
import Test2 from './components/test/Test2';
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import Home from './pages/Home/Home.tsx';
import Trade from './pages/Trade/Trade.tsx';
import TradeHistory from './pages/TradeHistory/TradeHistory.tsx';

function App() {
  return (
    <div>
      {/* <Test></Test> */}
      {/* <Home></Home> */}
      
      {/* <Sidebar></Sidebar>
      <Trade></Trade>
      <TradeHistory></TradeHistory> */}
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
