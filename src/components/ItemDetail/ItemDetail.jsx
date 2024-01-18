import { count } from "firebase/firestore"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import { useNotification } from "../../notification/NotificationService"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const InputCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type="number" onChange={handleChange} value={count} />
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({onAdd, stock, initial = 1}) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count > 0) {
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        if(count < stock){
            setCount(prev => prev + 1)
        }

    }

    return (
        <div>
            <p>Unidades: {count}</p>
            <div className="control-toadd-products">
                <button className="decrement-buttom" onClick={decrement}>-</button>
                <button className="add-products-buttom" onClick={()=> onAdd(count)}>Agregar al carrito</button>
                <button className="increment-buttom" onClick={increment}>+</button>
            </div>


        </div>
    )
}

const ItemDetail = ({id, name, category, img, price, description, stock}) => {
    const [inputType, setInputType] = useState('button')

    const { addItem, isInCart } = useCart()

    // const { showNotification } = useNotification()

    const ItemCount = inputType === 'input' ? InputCount : ButtonCount

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        addItem(objProductToAdd)
        toast.success(`Agregaste al carrito ${quantity} ${name}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            
        });


    }


    return (
        <article>
            <header>
                <h2 className="title-h2-detail">{name}</h2>
            </header>
            <picture>
                <img className="img-product-detail" src={img}/>
            </picture>
            <section className="information-product">
                <p className="text-category-detail">Category: {category}</p>
                <h3 className="price-detail">${price}</h3>
                <p>Description: {description}</p>
            </section>
            <footer>
                {
                    !isInCart(id) ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock}/>
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail