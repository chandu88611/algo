import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/Layout'
import Meta from './pages/trading/Meta'
import Insurance from './pages/Quickstart/Insurance'
import Trading from './pages/Quickstart/Trading'
import WhytoChoose from './pages/Quickstart/WhytoChoose'
import Web from './pages/trading/Web'
import TransXCopy from './pages/trading/TransXCopy'
import VPS from './pages/trading/VPS'
import Forex from './pages/markets/Forex'
import Commodity from './pages/markets/Commodity'
import Stocks from './pages/markets/Stocks'
import Indices from './pages/markets/Indices'
import Crypto from './pages/markets/Crypto'
import Day_trading from './pages/education/Day_trading'
import Scaping from './pages/education/Scaping'
import Chart from './pages/education/Chart'
import News from './pages/education/News'
import Market from './pages/education/Market'
import SmartInvestment from './pages/SmartInvestment'
import Partners from './pages/Partners'
import About from './pages/About'
import Aml from './pages/Aml'
import Deposit from './pages/Quickstart/Deposit'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Desclaimer from './pages/Desclaimer'
import Cookie from './pages/Cookie'
import Terms from './pages/Terms'
import ClientAgreement from './pages/ClientAgreement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <Routes>
          <Route  path="/" element={<Layout><Home/></Layout>}/>
          <Route  path="/whytochoose" element={<Layout><WhytoChoose/></Layout>}/>
          <Route  path="/deposit" element={<Layout><Deposit/></Layout>}/>
          <Route  path="/trading" element={<Layout><Trading/></Layout>}/>
          <Route  path="/insurance" element={<Layout><Insurance/></Layout>}/>
          <Route  path="/trade5" element={<Layout><Meta/></Layout>}/>
          <Route  path="/webtrader" element={<Layout><Web/></Layout>}/>
          <Route  path="/transxcopytrade" element={<Layout><TransXCopy/></Layout>}/>
          <Route  path="/vps" element={<Layout><VPS/></Layout>}/>
          <Route  path="/forex" element={<Layout><Forex/></Layout>}/>
          <Route  path="/commodity" element={<Layout><Commodity/></Layout>}/>
          <Route  path="/stock" element={<Layout><Stocks/></Layout>}/>
          <Route  path="/indices" element={<Layout><Indices/></Layout>}/>
          <Route  path="/crypto" element={<Layout><Crypto/></Layout>}/>
          <Route  path="/day_trading" element={<Layout><Day_trading/></Layout>}/>
          <Route  path="/scalp" element={<Layout><Scaping/></Layout>}/>
          <Route  path="/chart_analysis" element={<Layout><Chart/></Layout>}/>
          <Route  path="/news_and_events" element={<Layout><News/></Layout>}/>
          <Route  path="/marketpsycology" element={<Layout><Market/></Layout>}/>
          <Route  path="/smart_invesment_plan" element={<Layout><SmartInvestment/></Layout>}/>
          <Route  path="/partner" element={<Layout><Partners/></Layout>}/>
          <Route  path="/about" element={<Layout><About/></Layout>}/>
          <Route  path="/support" element={<Layout><Contact/></Layout>}/>
          <Route  path="/privacy_policy" element={<Layout><Privacy/></Layout>}/>
          <Route  path="/terms" element={<Layout><Terms/></Layout>}/>
          <Route  path="/aml_policy" element={<Layout><Aml/></Layout>}/>
          <Route  path="/disclaimer" element={<Layout><Desclaimer/></Layout>}/>
          <Route  path="/cookies" element={<Layout><Cookie/></Layout>}/>
          <Route  path="/Clients" element={<Layout><ClientAgreement/></Layout>}/>
          <Route  path="*" element={<Layout><Home/></Layout>}/>
        
       
     
        </Routes>
      </Router>
  )
}

export default App
