import { getUsers } from "../../helpers/axiosHelper";
import { setUsers } from "./UserSlice";

//Get client  users
export const getUserAction = () => async (dispatch) => {
  const { status, users } = await getUsers();
  status === "success" && dispatch(setUsers(users));
};
