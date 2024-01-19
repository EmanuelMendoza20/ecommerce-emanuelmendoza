import { Link } from "react-router-dom"
import './Item.css'

const Item = ({ id, name, img, price}) => {
    return (
        <div className="product-card">
            <div className="img-container">
                <img className="img-product" src={img}/>
            </div>
            <div className="separator"></div>
            <h3 className="price">${price}</h3>
            <div className="title-container">
                <h2 className="title-h2">{name}</h2>
            </div>
            <Link to={`/detail/${id}`}>Agregar</Link>
        </div>  
    )
}

export default Item