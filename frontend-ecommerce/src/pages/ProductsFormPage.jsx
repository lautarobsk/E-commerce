import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  createProduct,
  deleteProduct,
  updateProduct,
  getProduct,
} from "../api/products.api";
import { useNavigate, useParams } from "react-router-dom";

export function ProductsFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateProduct(params.id, data);
    } else {
      await createProduct(data)
    }
    navigate('/productos')
  });

  useEffect(() => {
    async function loadProduct() {
      if (params.id) {
        const res = await getProduct(params.id);
        setValue('category', res.data.category)
        setValue('name', res.data.name)
        setValue('description', res.data.description)
        setValue('price', res.data.price)
        setValue('stock', res.data.stock)
      }
    }
    loadProduct();
  }, []);

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

        <input
          type="number"
          placeholder="ID Categoría"
          {...register("category", { required: true })}
        />
        {errors.category && <span>La categoría es obligatoria</span>}

        <button type="submit">Guardar</button>
      </form>

      {params.id && (
        <button
          onClick={async () => {
            const respuesta = window.confirm(
              "Estas seguro que quieres eliminar?",
            );
            if (respuesta) {
              await deleteProduct(params.id);
              navigate("/productos");
            }
          }}
        >
          Borrar
        </button>
      )}
    </div>
  );
}
