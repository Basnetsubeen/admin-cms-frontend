import React, { useEffect } from "react";
import AdminLayout from "../../components/adminLayout/AdminLayout";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsAction } from "./ReviewAction";

const Reviews = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviews);
  useEffect(() => {
    dispatch(getReviewsAction());
  }, [dispatch]);

  return (
    <AdminLayout>
      <h3 className="py-3">Users Management</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Rating</th>
            <th>Reviews</th>
            <th>ReviewedBy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reviews.length > 0 &&
            reviews.map((item, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{item.productName}</td>
                <td>{item.rating}</td>
                <td>{item.review}</td>
                <td>{item.reviewedBy}</td>
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

export default Reviews;
