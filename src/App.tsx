import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageHeader from './Layouts/PageHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-h-screen flex flex-col">
      
      <PageHeader/>

    </div>
  )
}

export default App
