import axios from "axios";
const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserEp = rootUrl + "/admin-user";

const apiProcessor = async ({ data, method, url }) => {
  try {
    const response = await axios({
      data,
      method,
      url,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//Insert new admin user
export const insertUser = (data) => {
  const option = {
    data,
    url: adminUserEp,
    method: "post",
  };
  return apiProcessor(option);
};
//Insert new admin user
export const verifyAdminEmail = (data) => {
  const option = {
    data,
    url: adminUserEp + "/verify-email",
    method: "patch",
  };
  return apiProcessor(option);
};
//Login admin user
export const loginAdminUser = (data) => {
  const option = {
    data,
    url: adminUserEp + "/login",
    method: "post",
  };
  return apiProcessor(option);
};
