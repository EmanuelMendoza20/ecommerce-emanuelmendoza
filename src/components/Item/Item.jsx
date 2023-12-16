import { Link } from "react-router-dom"
import './Item.css'

const Item = ({ id, name, img, price}) => {
    return (
        <div className="product-card">
            <h2 className="title-h2">{name}</h2>
            <img src={img} style={{ width: 200 }}/>
            <h3>${price}</h3>
            <Link to={`/detail/${id}`}>Ver Detalle</Link>
        </div>  
    )
}

export default Item