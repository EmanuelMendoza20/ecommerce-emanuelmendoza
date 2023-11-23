import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = ({company}) => {
    return (
        <nav>
            <p>{company}</p>
            <section>
                <button>Phones</button>
                <button>Laptops</button>
                <button>Gadgets</button>
            </section>
            <CartWidget/>
        </nav>
    )
}

export default Navbar
