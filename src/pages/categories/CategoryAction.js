import { toast } from "react-toastify";
import {
  addCategory,
  deleteCategory,
  fetchCategory,
  updateCategory,
} from "../../helpers/axiosHelper";
import { setCategories } from "./CategorySlice";
import { setModalShow } from "../system-state/SystemSlice";

//Get category
export const getCategoryAction = () => async (dispatch) => {
  const { status, categories } = await fetchCategory();
  status === "success" &&
    dispatch(setCategories(categories)) &&
    dispatch(setModalShow());
};

//Add category
export const addCategoryAction = (data) => async (dispatch) => {
  const isPromisePending = addCategory(data);
  toast.promise(isPromisePending, { pending: "Please wait...." });
  const { status, message } = await isPromisePending;
  toast[status](message);
  status === "success" && dispatch(getCategoryAction());
};
//Add category
export const updateCategoryAction = (data) => async (dispatch) => {
  const isPromisePending = updateCategory(data);
  toast.promise(isPromisePending, { pending: "Please wait...." });
  const { status, message } = await isPromisePending;
  toast[status](message);
  status === "success" && dispatch(getCategoryAction());
};
//Delete category
export const deleteCategoryAction = (_id) => async (dispatch) => {
  const isPromisePending = deleteCategory(_id);
  toast.promise(isPromisePending, { pending: "Please wait...." });
  const { status, message } = await isPromisePending;
  toast[status](message);
  status === "success" && dispatch(getCategoryAction());
};
