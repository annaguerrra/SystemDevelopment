import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import axios from 'axios'

function App() {
  const [ product, setProduct ] = useState<any[]>([])

  const fetchData = async () => {
    try{
      const response = await axios.get(`http://localhost:8080/api/products`)
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
    <View style ={ styles.container }>
      <h1 style={styles.header}>Products</h1>

    </View>

      { product.map((product: any) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Price: { product.price }</p>
        </div>
      ))}
    </>
  )
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",

    backgroundColor: "#111111"
  },
  header:{
    color: "#F5F5F5",
    fontSize: 36
  },
  boxTitle:{
    width: 30,
    height: 18,

    borderColor: "#F5F5F5"
  }

})


export default App
