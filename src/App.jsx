import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/NotificationService'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout'
import '../src/components/Styles/Styles.css'

const App = () => {
  return (
    <>
        <ToastContainer/>
        <BrowserRouter>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Nuestros productos'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados'}/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<CartView/>} />
              <Route path='/checkout' element={<Checkout/>} />
              <Route path='*' element={<h1>404 Not Found</h1>} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
    </>
  )
}

export default App