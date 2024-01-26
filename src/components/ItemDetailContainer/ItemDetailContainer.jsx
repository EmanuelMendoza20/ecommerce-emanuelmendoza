import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = ({addItem}) => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        const documentRef = doc(db, 'products', productId)

        getDoc(documentRef)
            .then(queryDocumentSnapshot => {
                const fields = queryDocumentSnapshot.data()
                const productAdapted = {id: queryDocumentSnapshot.id, ...fields}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })


        // getProductById(productId)
        //     .then(response => {
        //         setProduct(response)
        //     })
    }, [productId])

    if(loading) {
        <div className="spin-loader-container">
            <div class="loader"></div>
        </div>
    }

    return (
        <>
            <div className="item-detail-container">
                <h1 className="text-product-detail-container">Detalle de producto</h1>
                <ItemDetail {...product} addItem={addItem}/>
            </div>
        </>
    )
}

export default ItemDetailContainer