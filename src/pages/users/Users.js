import React, { useEffect } from "react";
import AdminLayout from "../../components/adminLayout/AdminLayout";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "./UserAction";

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);
  return (
    <AdminLayout>
      <h3 className="py-3">Users Management</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((item, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>
                  {item.fName} {""}
                  {item.lName}
                </td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <Button variant="link">Info</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </AdminLayout>
  );
};

export default Users;
