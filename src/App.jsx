import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar" bg-gray-800 p-4 flex items-center gap-4">
        <img src={reactLogo} className="logo" alt="React logo" />
        <h1 className="text-3xl font-bold  text-oranfe-500">
          Implementacion de Firabase
        </h1>
    </>
  )
}

export default App
