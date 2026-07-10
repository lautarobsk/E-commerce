import {Link} from 'react-router-dom'

export function Navigation() {
    return (
        <div>
            <Link to='/productos'>
                <h1>Productos APP</h1>
            </Link>
            <Link to='/productos-form'>Agregar Producto</Link>
        </div>
    )
}
