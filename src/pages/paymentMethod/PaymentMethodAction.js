import { toast } from "react-toastify";
import {
  addPaymentMethod,
  deletePaymentMethod,
  getPaymentMethod,
  updatePaymentMethod,
} from "../../helpers/axiosHelper";
import { setPaymentMethods } from "./PaymentSlice";
import { setModalShow } from "../system-state/SystemSlice";

//Get payment action
export const getPaymentAction = () => async (dispatch) => {
  const { status, paymentMethod } = await getPaymentMethod();

  status === "success" && dispatch(setPaymentMethods(paymentMethod));
};

// add payment method
export const postPaymentAction = (data) => async (dispatch) => {
  const promisePending = addPaymentMethod(data);
  toast.promise(promisePending, { pending: "Please wait ....." });
  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" &&
    dispatch(setModalShow()) &&
    dispatch(getPaymentAction());
};
// update payment method
export const updatePaymentAction = (data) => async (dispatch) => {
  const promisePending = updatePaymentMethod(data);
  toast.promise(promisePending, { pending: "Please wait ....." });
  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" &&
    dispatch(setModalShow()) &&
    dispatch(getPaymentAction());
};
// Delete payment method
export const deletePaymentAction = (_id) => async (dispatch) => {
  const promisePending = deletePaymentMethod(_id);
  toast.promise(promisePending, { pending: "Please wait ....." });
  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" && dispatch(getPaymentAction());
};
