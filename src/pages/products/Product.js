import React from "react";
import AdminLayout from "../../components/adminLayout/AdminLayout";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ProductTable from "../../components/product-table/ProductTable";

const Product = () => {
  return (
    <AdminLayout>
      <h1>Products</h1>
      {/* Redirects to new page to add product */}
      <div className="text-end">
        <Link to="/product/new">
          <Button variant="primary">
            <i className="fa-solid fa-plus"></i> Add New Products
          </Button>
        </Link>
      </div>
      <hr />
      <div className="product-list">
        {/* Product table */}
        <ProductTable />
      </div>
    </AdminLayout>
  );
};

export default Product;
