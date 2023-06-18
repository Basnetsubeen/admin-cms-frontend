import React, { useEffect } from "react";
import AdminLayout from "../../components/adminLayout/AdminLayout";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAction, getsingleProductAction } from "./ProductAction";
import EditProductForm from "../../components/product-form/EditProductForm";

const EditProduct = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const { selectedProduct } = useSelector((state) => state.product);
  useEffect(() => {
    _id && dispatch(getsingleProductAction(_id));
  }, [_id, dispatch]);
  const handleOnDelete = () => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }
    const { thumbnail, images } = selectedProduct;
    const imgs = [thumbnail, ...images];
    //We use new Set to prevent the duplication of the images
    deleteProductAction(_id, [...new Set(imgs)]);
  };

  return (
    <AdminLayout>
      <div className="mt-3 mb-3">
        <Link to="/product">
          <Button variant="primary">
            <i className="fa-solid fa-angle-left"></i> Back
          </Button>
        </Link>
      </div>
      <div className="div">
        <EditProductForm />
      </div>
      <div className="text-end mt-5">
        <Button variant="danger" onClick={handleOnDelete}>
          Delete Product
        </Button>
      </div>
    </AdminLayout>
  );
};

export default EditProduct;
