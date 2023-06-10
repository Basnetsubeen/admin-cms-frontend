import { toast } from "react-toastify";
import { addCategory, fetchCategory } from "../../helpers/axiosHelper";
import { setCategories } from "./CategorySlice";

//Get category
export const getCategoryAction = () => async (dispatch) => {
  const { status, categories } = await fetchCategory();
  status === "success" && dispatch(setCategories(categories));
};

//Add category
export const addCategoryAction = (data) => async (dispatch) => {
  const isPromisePending = addCategory(data);
  toast.promise(isPromisePending, { pending: "Please wait...." });
  const { status, message } = await isPromisePending;
  toast[status](message);
  status === "success" && dispatch(getCategoryAction());
};
