import { useForm } from "react-hook-form";
import { createProduct } from "../api/products.api"
import {useNavigate } from 'react-router-dom'


export function ProductsFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {
    const res = await createProduct(data)
    navigate('/productos')
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          {...register("name", { required: true })}
        />
        {errors.name && <span>El nombre es obligatorio</span>}

        <textarea
          placeholder="Descripción"
          {...register("description", { required: true })}
        />
        {errors.description && <span>La descripción es obligatoria</span>}

        <input
          type="number"
          step="0.01"
          placeholder="Precio"
          {...register("price", { required: true })}
        />
        {errors.price && <span>El precio es obligatorio</span>}

        <input
          type="number"
          placeholder="Stock"
          {...register("stock", { required: true })}
        />
        {errors.stock && <span>El stock es obligatorio</span>}

        {/* El ID de la categoría debería venir de un select o input */}
        <input
          type="number"
          placeholder="ID Categoría"
          {...register("category", { required: true })}
        />
        {errors.category && <span>La categoría es obligatoria</span>}

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
