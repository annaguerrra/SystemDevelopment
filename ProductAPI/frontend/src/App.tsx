import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [ product, setProduct ] = useState<any[]>([])

  const fetchData = async () => {
    try{
      const response = await axios.get(`http://localhost:${port}/api/products`)
      setProduct(response.data)
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>Products</h1>

      { product.map((product: any) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Price: { product.price }</p>
        </div>
      ))}
    </>
  )
}

export default App
