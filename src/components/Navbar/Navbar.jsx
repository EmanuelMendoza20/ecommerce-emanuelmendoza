import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import logoImg from './assets/logo-brand.svg'

const Navbar = ({company}) => {
    return (
        <nav>
            <img src={logoImg}/>
            <section>
                <button>Phones</button>
                <button>Laptops</button>
                <button>Headphones</button>
                <button>Gadgets</button>
            </section>
            <CartWidget/>
        </nav>
    )
}

export default Navbar
