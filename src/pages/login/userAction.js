import { toast } from "react-toastify";
import {
  getAdminUser,
  getnewAccessJWT,
  loginAdminUser,
  updateAdminUser,
  updateAdminUserPassword,
} from "../../helpers/axiosHelper";
import { setAdminUser } from "./userSlice";

//Get admin user
export const getAdminUserAction = (token) => async (dispatch) => {
  const { status, user } = await getAdminUser(token);
  status === "success" && dispatch(setAdminUser(user));
};

//Login admin user
export const loginAdminUserAction = (data) => async (dispatch) => {
  const responsePending = loginAdminUser(data);
  toast.promise(responsePending, { pending: "Please wait..." });
  const { status, message, user, accessJWT, refreshJWT } =
    await responsePending;
  toast[status](message);
  if (status === "success") {
    sessionStorage.setItem("accessJWT", accessJWT);
    localStorage.setItem("refreshJWT", refreshJWT);
    dispatch(setAdminUser(user));
  }
};

//Logout user
export const logoutUserAction = () => (dispatch) => {
  dispatch(setAdminUser({}));
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("refreshJWT");
};

//Auto login
export const autoLoginAction = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");

  if (accessJWT) {
    //if accessJWT exist, fetch user and mount user in our redux store
    dispatch(getAdminUserAction());
    //if refreshJWT exist only, fetch new accessJWT and fetch user using the newly fetch accessJWT
  } else if (refreshJWT) {
    const token = await getnewAccessJWT();
    token ? dispatch(getAdminUserAction(token)) : dispatch(logoutUserAction());
  } else {
    dispatch(logoutUserAction());
  }
};

//Admin profile update

export const updateAdminUserAction = (data) => async (dispatch) => {
  const promisePending = updateAdminUser(data);
  toast.promise(promisePending, { pending: "Please wait..." });
  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" && dispatch(getAdminUserAction());
};

//Update admin user password
export const updateAdminUserPasswordAction = async (data) => {
  const promisePending = updateAdminUserPassword(data);
  toast.promise(promisePending, { pending: "Please wait..." });
  const { status, message } = await promisePending;
  toast[status](message);
};
