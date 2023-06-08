import { toast } from "react-toastify";
import { loginAdminUser } from "../../helpers/axiosHelper";
import { setAdminUser } from "./userSlice";

//Login admin user
export const loginAdminUserAction = (data) => async (dispatch) => {
  const resultPromise = loginAdminUser(data);
  toast.promise(resultPromise, { pending: "Please wait..." });
  const { status, message, user } = await resultPromise;
  toast[status](message);
  status === "success" && dispatch(setAdminUser(user));
};
