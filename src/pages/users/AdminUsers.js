import React, { useEffect } from "react";
import AdminLayout from "../../components/adminLayout/AdminLayout";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAdminUserAction, getAllUserAction } from "../login/userAction";

const AdminUsers = () => {
  const dispatch = useDispatch();
  const { adminUsers, user } = useSelector((state) => state.admin);
  useEffect(() => {
    dispatch(getAllUserAction());
  }, [dispatch]);

  const handleOnDelete = (_id) => {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }
    dispatch(deleteAdminUserAction(_id));
  };
  return (
    <AdminLayout>
      <h3 className="py-3">Admin User Management</h3>

      <div className="text-end py-3">
        <Link to="/register">
          <Button className="warning">Add New System Admin</Button>
        </Link>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {adminUsers?.length > 0 &&
            adminUsers?.map((item, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{item.status}</td>
                <td>
                  {item.fName} {""}
                  {item.lName}
                </td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <Button
                    variant="danger"
                    disabled={item._id === user._id}
                    onClick={() => handleOnDelete(item._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </AdminLayout>
  );
};

export default AdminUsers;
