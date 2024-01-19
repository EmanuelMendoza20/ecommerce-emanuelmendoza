import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CartView.css';

const CartView = () => {

    const { cart, total, removeItem } = useCart();

    const handleRemoveItem = (id, name, quantity) => {
        removeItem(id);
        toast.info(`Se eliminaron ${quantity} ${name} del carrito`, {
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
        <>
            <h1 className="text-h1-cart">Carrito</h1>
            <div>
                {cart.map(prod => (
                    <div className="container-checkout" key={prod.id}>
                        <div className="container-rows">
                            <h3 className="title-product">{prod.name}</h3>
                            <h3 className="title-product">Cantidad: {prod.quantity}</h3>
                            <h3 className="title-product">Precio por unidad: ${prod.price}</h3>
                            <h3 className="title-product">Subtotal: ${prod.quantity * prod.price}</h3>
                            <button className="buttom-remove-item" onClick={() => handleRemoveItem(prod.id, prod.name, prod.quantity)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="text-total-products">
                <span>Total:</span>
                <span>${total}</span>
            </h2>
            <Link className="buttom-checkout" to='/checkout'>Generar orden</Link>
        </>
    )
}

export default CartView;
