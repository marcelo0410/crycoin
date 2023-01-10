import './App.css';
import Navbar from './components/Nav/Navbar.tsx';
import Test from './components/test/Test';
import Test2 from './components/test/Test2';
import Home from './pages/Home/Home.tsx';
import Trade from './pages/Trade/Trade.tsx';
import TradeHistory from './pages/TradeHistory/TradeHistory.tsx';

function App() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      {/* <Test></Test> */}
      {/* <Home></Home> */}
      <Trade></Trade>
      <TradeHistory></TradeHistory>
    </div>
  );
}

export default App;
