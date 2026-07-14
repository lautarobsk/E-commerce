import axios from "axios";

const productApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/productos/",
});

export const getAllProducts = () => {
  return productApi.get("/");
};

export const createProduct = (product) => {
  return productApi.post("/", product);
};

export const deleteProduct = (id) => productApi.delete(`/${id}/`);

export const updateProduct = (id, product) => productApi.put(`/${id}/`, product);

export const getProduct = (id) => {
  return productApi.get(`/${id}/`)
}
