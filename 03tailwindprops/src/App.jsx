/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App(props) {
  console.log(props);
  const [count, setCount] = useState(0)

  return (
    <>
      <Card username= "Anubhav6393"/>
    </>
  )
}
export default App
