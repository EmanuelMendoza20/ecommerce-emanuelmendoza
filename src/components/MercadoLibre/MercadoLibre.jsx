import { useState, useEffect } from 'react';

const MercadoLibre = () => {
    const [products, setProducts] = useState([])

    useEffect (() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=celulares').then(response => {
            return response.json()
        })
        .then(json => {
            setProducts(json.results);
        })
    }, [])

  return (
    <div>
      <h1>MercadoLibre</h1>
      {
        products.map(prod=> {
            return(
                <div key={prod.id}>
                    <h3>{prod.title}</h3>
                    <img src={prod.thumbnail}/>
                    <h4>${prod.price}</h4>
                </div>
            )
        })
      }
    </div>
  )
};

export default MercadoLibre
