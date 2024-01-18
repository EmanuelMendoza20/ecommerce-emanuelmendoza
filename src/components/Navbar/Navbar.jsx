import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import logoImg from './assets/logo-brand.svg'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css';

const Navbar = ({company}) => {
    const navigate = useNavigate()

    return (
        <nav>
            <img src={logoImg} onClick={() => navigate('/')}/>
            <section>
                <Link to='/category/celular' className='btn btn-success'>Celulares</Link>
                <Link to='/category/tablet' className='btn btn-danger'>Tablets</Link>
                <Link to='/category/notebook' className='btn btn-warning'>Notebook</Link>
            </section>
            <CartWidget/>
        </nav>
    )
}

export default Navbar
