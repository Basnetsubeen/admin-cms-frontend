import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleOrderAction } from "../../pages/orders/OrderAction";
import { useParams } from "react-router-dom";
import { setSelectedOrders } from "../../pages/orders/OrderSlice";
import { Button, Form, Table } from "react-bootstrap";

const OrderEditForm = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { orders, selectedOrders } = useSelector((state) => state.order);
  useEffect(() => {
    //First check if we have orders in our state or not, if yes, select the order from the state;
    if (orders.length) {
      const select = orders.filter((item) => item._id === _id);
      dispatch(setSelectedOrders(select));
    } else {
      //If not, fetch the data from server
      dispatch(getSingleOrderAction(_id));
    }
  }, [_id, dispatch, orders]);
  const { cart } = selectedOrders;
  console.log(selectedOrders);
  return (
    <div>
      {/* Status */}
      <div className="fw-bold py-2 d-flex justify-content-between">
        <div>Status: {selectedOrders.status}</div>
        <div className="">
          <Form className="d-flex flex-wrap">
            <Form.Group>
              <Form.Select>
                <option value="">--- Select ----</option>
                <option value="shipped">Shipped</option>
                <option value="cancelled">Cancelled</option>
              </Form.Select>
            </Form.Group>
            <Button variant="warning">Update</Button>
          </Form>
        </div>
      </div>

      {/* Buyer Information */}
      <div className="shippingInfo p-2 mt-3 card p-3">
        <h4>Shipping Details</h4>
        <hr />
        <p>
          Order Date: 20-2-2-2222 <br />
          Name:{selectedOrders?.buyers.fName}
          {""} {selectedOrders?.buyers.lName}
          <br />
          Phone: {selectedOrders?.buyers.phone} <br />
          Email: {selectedOrders?.buyers.email} <br />
          Shipping Address: {selectedOrders?.shipping?.street} {""}
          {selectedOrders?.shipping?.suburb}
          {""}
          {selectedOrders?.shipping?.postCode} {""}
          {selectedOrders?.shipping?.country} {""}
          <br />
        </p>
      </div>

      {/* Payment Information */}
      <div className="payment-info card p-3">
        <h4>Payment Information</h4>
        <hr />
        Status: {selectedOrders?.paymentInfo?.status} <br />
        Total Paid: {selectedOrders?.paymentInfo?.paidAmount} <br />
        Paid Date: {selectedOrders?.paymentInfo?.paidDate} <br />
        Method: {selectedOrders?.paymentInfo?.method} <br />
        Transaction ID: {selectedOrders?.paymentInfo?.transactionId} <br />
      </div>

      {/*  Card Information*/}
      <div className="card p-2 mt-3">
        <h4>Card Details</h4>
        <hr />
        <Table stripped bordered hover>
          <thead>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Qty</th>
            <th>Sub Total</th>
          </thead>
          <tbody>
            {cart.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <img src="" alt="" crossOrigin="anonymous" width="130" />
                  {item.thumbnail}
                </td>
                <td>{item.productName}</td>
                <td>{item.salesPrice}</td>
                <td>{item.quantity}</td>
                <td>{item.subTotal}</td>
              </tr>
            ))}
            <tr className="fw-bolder">
              <td colSpan={5}>Total : </td>
              <td>${selectedOrders.totalAmount}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* Add som note form */}
      <Form className="mt-3 fw-bolder card p-3 ">
        <Form.Group className="mb-3">
          <Form.Label>Add Note</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Add some note ...."
            rows={5}
          />
        </Form.Group>
        <Button variant="primary">Add Note</Button>
      </Form>
      {/* Message History */}
      <div className="mt-5">
        <div className="note-history mt-3">
          Date: 12-2-24
          <div className="card p-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            iusto, cupiditate numquam nihil eligendi corrupti saepe obcaecati
            enim dolorem tenetur molestiae possimus incidunt aliquid magni
            excepturi autem nam ducimus quibusdam!
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderEditForm;
