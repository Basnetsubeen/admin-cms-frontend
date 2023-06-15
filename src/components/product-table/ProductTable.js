import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductAction } from "../../pages/products/ProductAction";

const ProductTable = () => {
  const { productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductAction());
  }, [dispatch]);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Status</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Prices</th>
            <th>Sales Price</th>
            <th>Sales Date</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <img
                  src={"http://localhost:8000/" + item.thumbnail}
                  alt=""
                  crossOrigin="anonymous"
                  width="130"
                />
              </td>
              <td>{item.status}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.salesPrice}</td>
              <td>
                {item.salesStartDate && item.salesStartDate.substr(0, 10)}{" "}
                {item.salesStartDate ? "To" : "-"}{" "}
                {item.salesEndDate && item.salesEndDate.substr(0, 10)}
              </td>
              <td>
                <Link to={`/product/edit/${item._id}`}>
                  <Button variant="warning">Edit</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
