import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './Content.jsx'
import Content2 from './Content2.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Content></Content>
      <Content2></Content2>
    </>
  )
}

export default App
