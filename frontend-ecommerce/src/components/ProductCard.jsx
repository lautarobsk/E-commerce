export function ProductCard({product}) {
    return (
        <div>
            <h1>{product.category}</h1>
            <h1>{product.name}</h1>
            <h1>{product.description}</h1>
            <h1>{product.price}</h1>
            <hr></hr>
        </div>
    )
}