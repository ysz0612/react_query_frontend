import React from "react";
import ProductTable from "../no2_components/product/ProductTable";
import { getCurrentUser } from "../no3_store/hooks/useUser";
import AuthControl from "../no2_components/layout/AuthControl";

const ProductPage = () => {
  const user = getCurrentUser();
  if(!user){
    return(
      <AuthControl
        message="로그인 후 상품 정보를 조회 및 관리 할 수 있습니다."
      />
    )
  }
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