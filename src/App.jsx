import { useState } from 'react'
import './App.css'
import Main from './WebPage/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Main/>
      
    </div>
  )
}

export default App
