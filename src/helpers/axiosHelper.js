import axios from "axios";
const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserEp = rootUrl + "/admin-user";
const categoryEp = rootUrl + "/category";
const paymentEp = rootUrl + "/payment-method";
const productEp = rootUrl + "/product";

const apiProcessor = async ({ data, method, url, isPrivate, token }) => {
  try {
    const headers = isPrivate
      ? { Authorization: token || sessionStorage.getItem("accessJWT") }
      : null;
    const response = await axios({
      data,
      method,
      url,
      headers,
    });
    return response.data;
  } catch (error) {
    // if jwt expired
    //First remove the both the tokens
    let message = error.message;
    if (error.response && error.response.status === 401) {
      sessionStorage.removeItem("accessJWT");
      localStorage.removeItem("refreshJWT");
    }
    //Overwrite the messaage with new message
    if (error.response && error.response.data) {
      message = error.response.data.message;
    }
    //Generate the new token and return the apiProcessor
    if (message === "jwt expired") {
      const accessJWT = await getnewAccessJWT();
      if (accessJWT) {
        return apiProcessor({ method, url, data, isPrivate, token });
      }
    }
    return {
      status: "error",
      message,
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
//Get admin user
export const getAdminUser = (token) => {
  const option = {
    url: adminUserEp,
    method: "get",
    isPrivate: true,
    token,
  };
  return apiProcessor(option);
};

//update user profile
export const updateAdminUser = (data) => {
  const option = {
    method: "put",
    url: adminUserEp,
    isPrivate: true,
    data,
  };
  return apiProcessor(option);
};

//update admin user password
export const updateAdminUserPassword = (data) => {
  const option = {
    method: "patch",
    url: adminUserEp,
    isPrivate: true,
    data,
  };
  return apiProcessor(option);
};
//update admin user password
export const requestOTPforAdminUserPassword = (data) => {
  const option = {
    method: "post",
    url: adminUserEp + "/request-password-reset-otp",
    data,
  };
  return apiProcessor(option);
};
//reset user password
export const resetAdminUserPassword = (data) => {
  const option = {
    method: "patch",
    url: adminUserEp + "/reset-password",
    data,
  };
  return apiProcessor(option);
};
//Generate new accessJWT to open in the tab in new browser
export const getnewAccessJWT = async () => {
  const token = localStorage.getItem("refreshJWT");
  const option = {
    method: "get",
    url: adminUserEp + "/accessJwt",
    isPrivate: true,
    token,
  };
  const { status, accessJWT } = await apiProcessor(option);
  status === "success" && sessionStorage.setItem("accessJWT", accessJWT);
  return accessJWT;
};

//========categories ===========//
//Insert category
export const addCategory = (data) => {
  const option = {
    data,
    url: categoryEp,
    method: "post",
    isPrivate: true,
  };
  return apiProcessor(option);
};
//Update category
export const updateCategory = (data) => {
  const option = {
    data,
    url: categoryEp,
    method: "put",
    isPrivate: true,
  };
  return apiProcessor(option);
};

// Get all categories
export const fetchCategory = (_id) => {
  const option = {
    url: _id ? categoryEp + "/" + _id : categoryEp,
    method: "get",
    isPrivate: true,
  };
  return apiProcessor(option);
};
// Get all categories
export const deleteCategory = (_id) => {
  const option = {
    url: categoryEp + "/" + _id,
    method: "delete",
    isPrivate: true,
  };
  return apiProcessor(option);
};

// ========Payment Methods ========//

//Add payment method
export const addPaymentMethod = (data) => {
  const option = {
    data,
    url: paymentEp,
    method: "post",
    isPrivate: true,
  };
  return apiProcessor(option);
};
// Get payment
export const getPaymentMethod = () => {
  const option = {
    url: paymentEp,
    method: "get",
    isPrivate: true,
  };
  return apiProcessor(option);
};

// Update payment
export const updatePaymentMethod = (data) => {
  const option = {
    data,
    url: paymentEp,
    method: "put",
    isPrivate: true,
  };
  return apiProcessor(option);
};
// Delete payment
export const deletePaymentMethod = (_id) => {
  const option = {
    url: paymentEp + "/" + _id,
    method: "delete",
    isPrivate: true,
  };
  return apiProcessor(option);
};

//=======Product===============//
export const addProduct = (data) => {
  const option = {
    data,
    url: productEp,
    method: "post",
    isPrivate: true,
  };
  return apiProcessor(option);
};
// Get payment
export const getProduct = (_id) => {
  const option = {
    url: _id ? productEp + "/" + _id : productEp,
    method: "get",
    isPrivate: true,
  };
  return apiProcessor(option);
};
//Update Product
export const updateProduct = (data) => {
  const option = {
    data,
    url: productEp,
    method: "put",
    isPrivate: true,
  };
  return apiProcessor(option);
};

//Delete Product
export const deleteProduct = (_id, data) => {
  const option = {
    url: productEp + "/" + _id,
    method: "delete",
    isPrivate: true,
    data,
  };
  return apiProcessor(option);
};
