import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({name, category, img, price, description, stock}) => {
    return (
        <div className="item-detail">
            <h1>{name}</h1>
            <p>Category: {category}</p>
            <img className="img-product" src={img}/>
            <h3>${price}</h3>
            <p>Description: {description}</p>
            <ItemCount stock={stock}/>
        </div>
    )
}

export default ItemDetail