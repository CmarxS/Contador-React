import { useState } from 'react'

import './App.css'
import Contador from './componentes/contador/contador'

function App() {
  const [numero, setCount] = useState(0)
  return (
    <>
    <h1>Contador</h1>
     <Contador numero={numero} setCount={setCount}></Contador>
    </>
  )
}

export default App
