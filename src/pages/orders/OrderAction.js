import { getOrder } from "../../helpers/axiosHelper";
import { setOrders, setSelectedOrders } from "./OrderSlice";

//Get orders
export const getOrdersAction = () => async (dispatch) => {
  const { status, orders } = await getOrder();
  status === "success" && dispatch(setOrders(orders));
};
//Get single order
export const getSingleOrderAction = (_id) => async (dispatch) => {
  const { status, orders } = await getOrder(_id);
  status === "success" && dispatch(setSelectedOrders(orders));
};
