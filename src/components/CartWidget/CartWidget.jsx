import cartImg from './assets/cart.svg'
import classes from './CartWidget.module.css'

const CartWidget = () => {
    return (
        <button>
            <img src={cartImg}/>
            0
        </button>
    )
}

export default CartWidget