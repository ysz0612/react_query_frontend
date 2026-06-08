import React from "react";
import ProductTable from "../no2_components/product/ProductTable";

const ProductPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f7fb",
        padding: "40px"
      }}
    >
      <ProductTable />
    </div>
  );
};

export default ProductPage;