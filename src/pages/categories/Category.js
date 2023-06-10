import React from "react";
import AdminLayout from "../../components/adminLayout/AdminLayout";
import AddCategoryForm from "../../components/category-form/AddCategoryForm";
import CategoryTable from "../../components/category-table/CategoryTable";

const Category = () => {
  return (
    <AdminLayout>
      {/* form */}
      <AddCategoryForm />
      {/* table */}
      <CategoryTable />
    </AdminLayout>
  );
};

export default Category;
