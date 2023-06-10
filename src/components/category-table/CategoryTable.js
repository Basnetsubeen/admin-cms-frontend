import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategoryAction,
  getCategoryAction,
} from "../../pages/categories/CategoryAction";
import EditCategoryForm from "../category-form/EditCategoryForm";
import { setModalShow } from "../../pages/system-state/SystemSlice";

const CategoryTable = () => {
  const [selectedCategory, setSelectedCategory] = useState({});
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const parentCategory = categories.filter((item) => !item.parentId);
  const childCategory = categories.filter((item) => item.parentId);

  useEffect(() => {
    dispatch(getCategoryAction());
  }, [dispatch]);

  const handleOnEdit = (category) => {
    setSelectedCategory(category);
    dispatch(setModalShow());
  };

  const handleOnDelete = (_id) => {
    if (!window.confirm("Are you sure you want to delete this category")) {
      return;
    }
    dispatch(deleteCategoryAction(_id));
  };
  return (
    <div>
      <EditCategoryForm selectedCategory={selectedCategory} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 &&
            parentCategory.map((item) => (
              <>
                <tr className="bg-info" key={item._id}>
                  <td
                    className={
                      item.status === "active" ? "text-success" : "text-danger"
                    }
                  >
                    {item.status}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.parentId ? "children" : "parent"}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleOnDelete(item._id)}
                    >
                      Delete
                    </Button>{" "}
                    <Button
                      variant="warning"
                      onClick={() => handleOnEdit(item)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
                {childCategory.map(
                  (child) =>
                    child.parentId === item._id && (
                      <tr key={child._id} className="bg-danger">
                        <td
                          className={
                            child.status === "active"
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          {child.status}
                        </td>
                        <td>{child.name}</td>
                        <td>{child.parentId ? "children" : "parent"}</td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => handleOnDelete(child._id)}
                          >
                            Delete
                          </Button>{" "}
                          <Button
                            variant="warning"
                            onClick={() => handleOnEdit(child)}
                          >
                            Edit
                          </Button>
                        </td>
                      </tr>
                    )
                )}
              </>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CategoryTable;
