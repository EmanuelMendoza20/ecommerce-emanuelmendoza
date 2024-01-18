import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
// import SpinnerCarga from "../Spinner/Spinner"

const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')
        
        getDocs(collectionRef)
            .then(QuerySnapshot => {
                console.log(QuerySnapshot)

                const productsAdapted = QuerySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return {id: doc.id, ...fields}
                })

                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })

        // setLoading(true)
        
        // const asyncFunction = categoryId ? getProductsByCategory : getProducts

        // asyncFunction(categoryId)
        //     .then(response => {
        //         setProducts(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
            
    }, [categoryId])

    if(loading) {
        return <>
                {/* <SpinnerCarga/> */}
                <h1>Loading...</h1>
                </>
    }

    return (
        <div className="item-list-container">
            <div className="title-item-list-container">
                <h1>{greeting}</h1>
            </div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer