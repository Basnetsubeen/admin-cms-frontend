import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersAction } from "../../pages/orders/OrderAction";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderTable = () => {
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersAction());
  }, [dispatch]);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>status</th>
            <th>Buyers Name</th>
            <th>Order Total</th>
            <th>Payment Status</th>
            <th>Orders Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{item.status}</td>
              <td>
                {item?.buyers?.fName} {item?.buyers?.lName}
              </td>
              <td>{item.totalAmount}</td>
              <td>{item?.paymentInfo?.status}</td>
              <td>
                <Link to={`/order/${item?._id}`}>
                  <Button variant="info">View Details</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderTable;
