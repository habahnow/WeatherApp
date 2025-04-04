import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DashboardItem from './components/DashboardItem'
import Dashboard from './pages/Dashboard'
import {Routes, Route} from "react-router-dom"
import { CityProvider } from "./contexts/CityContext"
import DetailedCity from './pages/DetailedCity'

function App() {
  

  return (
    <CityProvider>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/Detailed" element={<DetailedCity/>}/>
        </Routes>
      </main>
    </CityProvider>
  )
}


export default App
