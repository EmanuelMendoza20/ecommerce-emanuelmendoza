import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar company={'Brand'}/>
    <ItemListContainer greeting={'Ups. Aún no hay elementos que mostrar.'}/>
    </>
  )
}

export default App
