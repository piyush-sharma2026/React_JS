import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Piyush",
    age: 21
  }
// Can pass array also..in <Card />
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
     <Card username = "chaiaurcode" btnText = "CLICK ME" /> 
     <Card username = "Piyush"/>
     
    </>
  )
}

export default App
