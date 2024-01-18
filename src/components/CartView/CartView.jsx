import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"
import './CartView.css'

const CartView = () => {

    const { cart, total, removeItem } = useCart()

    return(
        <>
            <h1 className="text-h1-cart">CARRITO</h1>
            <div>
                {
                    cart.map(prod => {
                        return (
                            <div className="container-producto-cart" key={prod.id}>
                                <h3>{prod.name}</h3>
                                <h3>Cantidad: {prod.quantity}</h3>
                                <h3>Precio por unidad: ${prod.price}</h3>
                                <h3>Subtotal: ${prod.quantity * prod.price}</h3>
                                <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                            </div>
                        )
                    })
                }
            </div>
            <h2 className="text-total-products">Total de la compra: ${total}</h2>
                <Link className="buttom-checkout" to='/checkout'>Checkout</Link>
        </>
    )
}

export default CartView