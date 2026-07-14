import { useNavigate } from 'react-router-dom'


export function ProductCard({product}) {
    
    const navigate = useNavigate()

    return (
        <div style={({background: "red"})}
            onClick={() => {
                navigate('/productos/' + product.id)
            }}

        >
            <h1>{product.category}</h1>
            <h1>{product.name}</h1>
            <h1>{product.description}</h1>
            <h1>{product.price}</h1>
            <hr></hr>
        </div>
    )
}