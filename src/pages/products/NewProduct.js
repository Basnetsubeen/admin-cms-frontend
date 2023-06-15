import React from "react";
import AdminLayout from "../../components/adminLayout/AdminLayout";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AddProductForm from "../../components/product-form/AddProductForm";

const NewProduct = () => {
  return (
    <AdminLayout>
      <div className="mt-3 mb-3">
        <Link to="/product">
          <Button>
            <i class="fa-solid fa-angle-left"></i> Back
          </Button>
        </Link>
      </div>
      <h1>Add New Products</h1>
      <hr />
      <div>
        <AddProductForm />
      </div>
    </AdminLayout>
  );
};

export default NewProduct;
