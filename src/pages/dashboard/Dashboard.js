import React, { useEffect } from "react";
import AdminLayout from "../../components/adminLayout/AdminLayout";
import { Col, Row } from "react-bootstrap";
import CustomCard from "../../components/custom-card/CustomCard";
import CustomTable from "../../components/custom-table/CustomTable";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductAction } from "../products/ProductAction";

const Dashboard = () => {
  const { productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    !productList.length && dispatch(getProductAction());
  }, [dispatch, productList]);
  const clientTableHead = ["First Name", "Last Name", "Joined Date"];
  const clientInfo = [
    {
      fName: "subin",
      lName: "Basnet",
      joinedAt: "12/12/2344",
    },
    {
      fName: "subin",
      lName: "Basnet",
      joinedAt: "12/12/2344",
    },
    {
      fName: "subin",
      lName: "Basnet",
      joinedAt: "12/12/2344",
    },
  ];
  const orderHead = [
    "Status",
    "Payment Status",
    "Name",
    "Ordered Date",
    "Total Qty",
    "Order Total",
  ];
  const orderInfo = [
    ["Pending", "Paid", "Subin Basnet", "2-2-2333", 2, 345],
    ["Shipped", "Paid", "Subin Basnet", "2-2-2333", 2, 345],
    ["Cancelled", "Paid", "Subin Basnet", "2-2-2333", 2, 345],
  ];
  const activeProduct = productList.map((item) => item.status === "active");
  return (
    <AdminLayout>
      <h4>Dashboard</h4>
      <hr />
      {/* Product summary */}
      <div className="dashboard-product mt-3 py-3">
        <h5>Product Summary</h5>
        <hr />
        <Row className="g-2">
          <Col md="4">
            {<CustomCard count={productList.length} title="Total Product" />}
          </Col>
          <Col md="4">
            {
              <CustomCard
                count={productList.length - activeProduct.length || 0}
                title="Inactive"
              />
            }
          </Col>
          <Col md="4">
            {<CustomCard count={activeProduct.length || 0} title="Active" />}
          </Col>
        </Row>
      </div>

      {/* Client summary */}
      <div className="my-5">
        <h5>New Clients</h5>
        <hr />
        <CustomTable tableHead={clientTableHead} tableData={clientInfo} />
      </div>
      {/* Last 5 Orders */}
      <div className="my-5">
        <h5>
          Recent Orders{" "}
          <Link to="/orders" className="text-decoration-none">
            View all orders
          </Link>
        </h5>
        <hr />
        <CustomTable tableHead={orderHead} tableData={orderInfo} />
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
