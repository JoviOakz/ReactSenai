import React from 'react'
import ReactDOM from 'react-dom/client'
// import Login from './pages/LoginPage/Login'
import Home from './pages/HomePage/Home'
// import HomeTailwind from './pages/HomePageTailwind/HomeTailwind'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Login/> */}
    <Home/>
    {/* <HomeTailwind/> */}
  </React.StrictMode>,
)
