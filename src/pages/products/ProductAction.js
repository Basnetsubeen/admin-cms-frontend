import { toast } from "react-toastify";
import {
  addProduct,
  deleteProduct,
  getProduct,
} from "../../helpers/axiosHelper";
import { setProducts, setSelectedProducts } from "./ProductSlice";

//Get Product
export const getProductAction = () => async (dispatch) => {
  const { status, products } = await getProduct();
  status === "success" && dispatch(setProducts(products));
};
//Get single Product
export const getsingleProductAction = (_id) => async (dispatch) => {
  const { status, products } = await getProduct(_id);
  status === "success" && dispatch(setSelectedProducts(products));
};
//Add Product
export const addProductAction = async (data) => {
  const promisePending = addProduct(data);
  toast.promise(promisePending, { pending: "Please wait ...." });
  const { status, message } = await promisePending;
  toast[status](message);
};
//Add Product
export const deleteProductAction = async (_id, data) => {
  const promisePending = deleteProduct(_id, data);
  toast.promise(promisePending, { pending: "Please wait ...." });
  const { status, message } = await promisePending;
  toast[status](message);
};
