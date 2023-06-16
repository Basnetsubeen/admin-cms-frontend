import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCategoryAction } from "../../pages/categories/CategoryAction";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import CustomInputField from "../customInputField/CustomInputField";
import { updateProductAction } from "../../pages/products/ProductAction";

const initialState = {
  status: "inacitve",
  catId: null,
  name: "",
  sku: "",
  quantity: "",
  price: 0,
  salesPrice: 0,
  salesStartDate: null,
  salesEndDate: null,
  description: "",
};
const EditProductForm = () => {
  const { categories } = useSelector((state) => state.category);
  const { selectedProduct } = useSelector((state) => state.product);
  const [images, setImages] = useState([]);
  const [imgToDelete, setImgToDelete] = useState([]);
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  useEffect(() => {
    !categories.length && dispatch(getCategoryAction());
    setForm(selectedProduct);
  }, [dispatch, categories, selectedProduct]);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }
    setForm({ ...form, [name]: value });
  };

  const handleOnImageSelect = (e) => {
    const { files } = e.target;
    setImages(files);
  };

  const handleOnImageDelete = (e) => {
    let { checked, value } = e.target;
    if (checked) {
      setImgToDelete([...imgToDelete, value]);
    } else {
      setImgToDelete(imgToDelete.filter((img) => img !== value));
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { sku, slug, rating, createdAt, updatedAt, __v, ...rest } = form;
    //set data with formData
    const formData = new FormData();
    //append forme data first
    for (const key in rest) {
      formData.append(key, rest[key]);
    }
    //append images
    images.length &&
      [...images].map((img) => formData.append("newImages", img));

    //append images to add and delete while editing as well
    formData.append("imgToDelete", imgToDelete);

    dispatch(updateProductAction(formData));
  };
  const inputFields = [
    {
      name: "name",
      value: form.name,
      label: "Name",
      type: "text",
      placeholder: "Product Name",
      required: true,
    },

    {
      name: "sku",
      value: form.sku,
      label: "SKU",
      type: "text",
      placeholder: "Products unique code",
      required: true,
      disabled: true,
    },
    {
      name: "quantity",
      value: form.quantity,
      label: "Quantity",
      type: "number",
      placeholder: "QTY",
      required: true,
    },
    {
      name: "price",
      value: form.price,
      label: "price",
      type: "number",
      placeholder: "343",
      min: 1,
      required: true,
    },
    {
      name: "salesPrice",
      value: form.salesPrice,
      label: "Sales Price",
      type: "number",
      placeholder: "Product Name",
    },
    {
      name: "salesStartDate",
      value: form.salesStartDate,
      label: "Sales start Date",
      type: "date",
    },
    {
      name: "salesEndDate",
      value: form.salesEndDate,
      label: "Sales End Date",
      type: "date",
    },
    {
      name: "description",
      value: form.description,
      label: "Description",
      type: "text",
      as: "textarea",
      rows: 10,
      placeholder: "343",
      required: true,
    },

    {
      name: "images",
      type: "file",
      accept: "images/*",
      multiple: true,
    },
  ];
  return (
    <div>
      <Form onSubmit={handleOnSubmit} encType="multipart/form-data">
        <Form.Group className="mb-3">
          <Form.Label>Assign Category</Form.Label>
          <Form.Check
            name="status"
            label="status"
            type="switch"
            onChange={handleOnChange}
            checked={form.status === "active"}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select name="catId" onChange={handleOnChange}>
            <option value="">Select a Category</option>
            {categories.length &&
              categories.map(
                (item) =>
                  item.parentId && (
                    <option value={item._id} selected={item._id === form.catId}>
                      {item.name}
                    </option>
                  )
              )}
          </Form.Select>
        </Form.Group>
        {inputFields.map((item, i) => (
          <CustomInputField
            {...item}
            key={i}
            onChange={
              item.name === "images" ? handleOnImageSelect : handleOnChange
            }
          />
        ))}
        <div className="my -5 d-flex flex-wrap">
          {selectedProduct.images &&
            selectedProduct.images.map((imgLink) => (
              <div className="p-1">
                <Form.Check
                  type="checkbox"
                  label="Use as a thumbnail"
                  name="thumbnail"
                  onChange={handleOnChange}
                  value={imgLink}
                  checked={imgLink === form.thumbnail}
                />
                <img
                  src={process.env.REACT_APP_SERVER_ROOT + imgLink}
                  width="150px"
                  alt=""
                  crossOrigin="anonymous"
                />
                <Form.Check
                  className="mt-1"
                  type="checkbox"
                  label="Delete"
                  style={{ background: "yellow" }}
                  value={imgLink}
                  onChange={handleOnImageDelete}
                />
              </div>
            ))}
        </div>
        <Button variant="primary" type="submit">
          Submit product
        </Button>
      </Form>
    </div>
  );
};

export default EditProductForm;
