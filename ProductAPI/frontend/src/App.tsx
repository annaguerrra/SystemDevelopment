import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [ product, setProduct ] = useState<any>([])

  const fetchData = async () => {
    const response = await axios.get("http://localhost:${port}/`")
  }
  return (
    <>
      
    </>
  )
}

export default App
