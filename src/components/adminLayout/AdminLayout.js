import React from "react";
import MainLayout from "../layout/MainLayout";
import SideMenu from "../side-menu/SideMenu";

const AdminLayout = ({ children }) => {
  return (
    <MainLayout>
      {/* Side Menu */}
      <SideMenu />
      {/* main body */}
      <main style={{ minHeight: "70vh" }} className="container">
        {children}
      </main>
    </MainLayout>
  );
};

export default AdminLayout;
