import cartImg from './assets/cart.svg'
import classes from './CartWidget.module.css'
import { useCart } from '../../context/CartContext'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <button>
            <img src={cartImg}/>
            { totalQuantity }
        </button>
    )
}

export default CartWidget

