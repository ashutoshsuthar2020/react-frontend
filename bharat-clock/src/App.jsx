import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './components/clock'
function App() {
  return(
    <div className='container center'>
      <h1>Bharat clock</h1>
      <Clock />
    </div>
  )
}

export default App
