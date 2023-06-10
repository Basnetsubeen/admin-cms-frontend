import axios from "axios";
const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserEp = rootUrl + "/admin-user";
const categoryEp = rootUrl + "/category";

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

//========categories ===========//
//Insert category
export const addCategory = (data) => {
  const option = {
    data,
    url: categoryEp,
    method: "post",
  };
  return apiProcessor(option);
};
//Update category
export const updateCategory = (data) => {
  const option = {
    data,
    url: categoryEp,
    method: "put",
  };
  return apiProcessor(option);
};

// Get all categories
export const fetchCategory = (_id) => {
  const option = {
    url: _id ? categoryEp + "/" + _id : categoryEp,
    method: "get",
  };
  return apiProcessor(option);
};
// Get all categories
export const deleteCategory = (_id) => {
  const option = {
    url: categoryEp + "/" + _id,
    method: "delete",
  };
  return apiProcessor(option);
};
