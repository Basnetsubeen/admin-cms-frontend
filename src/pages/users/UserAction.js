//Get users

import { getUsers } from "../../helpers/axiosHelper";
import { setUsers } from "./UserSlice";

export const getUserAction = () => async (dispatch) => {
  const { status, users } = await getUsers();
  status === "success" && dispatch(setUsers(users));
};
