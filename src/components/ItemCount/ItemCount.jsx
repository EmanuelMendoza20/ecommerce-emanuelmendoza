import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ initialValue, incrementBy, stock }) => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        if(count > 0) {
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        if(count < stock){
            setCount(prev => prev + 1)
        }

    }

    return (
        <div className='item-count'>
            <h1>{count}</h1>
            <div className='item-count-control'>
                <button className='btns' onClick={decrement}>-</button>
                <button className='btns to-cart' onClick={() => onAdd(count)}>Agregar al carrito</button>
                <button className='btns' onClick={increment}>+</button>
            </div>
            
        </div>
    )
}

export default ItemCount