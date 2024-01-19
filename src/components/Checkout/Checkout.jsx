import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import { addDoc, getDocs, collection, query, where, documentId, writeBatch } from 'firebase/firestore'
import { useNotification } from "../../notification/NotificationService"
import './Checkout.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)

    const { cart, total, clearCart } = useCart()

    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: '',
    })

    const handleInputChange = (e) => {
        setUserData({
          ...userData,
          [e.target.name]: e.target.value,
        })
      }

    const createOrder = async (userData) => {

        try {
            setLoading(true)
            const objOrder = {
                buyer: {
                    name: userData.name,
                    phone: userData.phone,
                    email: userData.email,
                },
                items: cart,
                total
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            // getDocs(productsCollection).then(querySnapshot => console.log(documentSnapshot))
    
            const { docs } = await getDocs(productsCollection)
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref,{ stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })
    
    
            if(outOfStock.length === 0) {
                batch.commit()
    
                const ordersCollection = collection(db, 'orders')
                
                const { id } = await addDoc(ordersCollection, objOrder)
                

                setOrderId(id)
                toast.success(`Se ha generado tu orden correctamente`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                clearCart()
            } else {
                console.log('error', 'Hay productos que no tienen stock disponible')
            }
        } catch (error){
            console.log('error', 'Hubo un error generando la orden: ' + error.message)
        } finally {
            setLoading(false)
        }
        
    }

    if(loading) {
        return <h1 className="text-h1-order">Se esta generando su orden...</h1>
    }

    if(orderId) {
        return (
        <>
            <h1 className="text-h1-order">Número de orden</h1>
            <div className="generated-order">
                <h2 className="text-h2-checkout"><span>Tu número de orden se ha generado correctamente: </span>
                <span className="order-code">{orderId}</span></h2>
            </div>
        </>
        )
    }

    return (
        <>
        <h1 className="text-h1-checkout">Checkout</h1>
        <div className="container-checkout-buyer">
            <div className="input-container">
                <input
                type="text"
                name="name"
                placeholder="Name"
                value={userData.name}
                onChange={handleInputChange}
                className="input-data"
                />
                <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={userData.phone}
                onChange={handleInputChange}
                className="input-data"
                />
                <input
                type="text"
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleInputChange}
                className="input-data"
                />
            </div>
        </div>
        <button onClick={() => createOrder(userData)} className="button-generate-order">Generar orden</button>
        </>
    )
}

export default Checkout
