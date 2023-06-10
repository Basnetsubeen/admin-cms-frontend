import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAction } from "../../pages/categories/CategoryAction";

const CategoryTable = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const parentCategory = categories.filter((item) => !item.parentId);
  const childCategory = categories.filter((item) => item.parentId);

  useEffect(() => {
    dispatch(getCategoryAction());
  }, [dispatch]);
  return (
    <div>
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
                    <Button variant="danger">Delete</Button>
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
                          <Button variant="danger">Delete</Button>
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
