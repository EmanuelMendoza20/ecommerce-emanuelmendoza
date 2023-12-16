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
                <button className='btns' onClick={decrement}>Decrementar</button>
                <button className='btns' onClick={() => setCount(initialValue)}>Reiniciar</button>
                <button className='btns' onClick={increment}>Incrementar</button>
            </div>
            
        </div>
    )
}

export default ItemCount