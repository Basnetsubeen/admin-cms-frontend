import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateCategoryAction } from "../../pages/categories/CategoryAction";
import { CustomModal } from "../modal/CustomModal";
const initialState = {
  status: "inactive",
  name: "",
  parentId: null,
};

const EditCategoryForm = ({ selectedCategory }) => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    setForm(selectedCategory);
  }, [selectedCategory]);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { slug, __v, createdAt, updatedAt, ...rest } = form;
    dispatch(updateCategoryAction(rest));
  };

  return (
    <CustomModal title="Edit Category Form">
      <Form
        className="py-4 mb-5 mt-3 border p-3 shadow rounded"
        onSubmit={handleOnSubmit}
      >
        <h4 className="mb-3">Edit Category</h4>
        <Row className="g-2">
          <Col md="2">
            <Form.Group>
              <Form.Check
                name="status"
                label="status"
                type="switch"
                checked={form.status === "active"}
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>
          <Col md="4">
            <Form.Group>
              <Form.Select name="parentId" onChange={handleOnChange}>
                <option value="">Select Parent Category</option>
                {categories.length > 0 &&
                  categories.map(
                    (item) =>
                      !item.parentId && (
                        <option
                          value={item._id}
                          selected={item._id === form.parentId}
                        >
                          {item.name}
                        </option>
                      )
                  )}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="4">
            <Form.Group>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter Category Name"
                onChange={handleOnChange}
                value={form.name}
                required
              />
            </Form.Group>
          </Col>
          <Col md="2">
            <Form.Group>
              <Button variant="primary" type="submit">
                Update Category
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </CustomModal>
  );
};

export default EditCategoryForm;
