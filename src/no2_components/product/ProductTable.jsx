import React, { useMemo, useState } from "react";
import {
  useAllGetProduct,
  useDeleteProduct,
  usePostRegisterProduct,
  usePutUpdateProduct,
} from "../../no3_store/hooks/useProduct";
import { AgGridReact } from "ag-grid-react";
import ProductModal from "./ProductModal";

const ProductTable = () => {
  const [open, setOpen] = useState(false);
  const [newProduct, setNewProduct] = useState(null);

  const { data: productList = [], isLoading, error } = useAllGetProduct();

  const updateMutation = usePutUpdateProduct();
  const deleteMutation = useDeleteProduct();
  const registerMutation = usePostRegisterProduct();

  const handleRegister = () => {
    setNewProduct(null);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      await deleteMutation.mutateAsync(id);
    }
  };

  const handleUpdate = (product) => {
    setNewProduct(product);
    setOpen(true);
  };

  const columnDefs = useMemo(
    () => [
      {
        field: "product_name",
        headerName: "상품명",
        flex: 1,
      },
      {
        field: "color",
        headerName: "색상",
        flex: 1,
      },
      {
        field: "cost_price",
        headerName: "원가",
        flex: 1,
      },
      {
        field: "sale_price",
        headerName: "판매가",
        flex: 1,
      },
      {
        field: "category_code",
        headerName: "카테고리",
        flex: 1,
      },
      {
        headerName: "상품 관리",
        flex: 1.2,
        cellRenderer: (params) => (
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              height: "100%",
            }}
          >
            <button
              onClick={() => handleUpdate(params.data)}
              style={{
                backgroundColor: "#22c55e",
                color: "#fff",
                border: "none",
                padding: "6px 12px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              수정
            </button>

            <button
              onClick={() => handleDelete(params.data.id)}
              style={{
                backgroundColor: "#ef4444",
                color: "#fff",
                border: "none",
                padding: "6px 12px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              삭제
            </button>
          </div>
        ),
      },
    ],
    []
  );

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>{error?.message}</h3>;

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "32px",
            fontWeight: "700",
            color: "#1e293b",
          }}
        >
          상품 관리
        </h1>

        <button
          onClick={handleRegister}
          style={{
            backgroundColor: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          + 상품 등록
        </button>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        }}
      >
        <div
          className="ag-theme-alpine"
          style={{
            height: "700px",
            width: "100%",
          }}
        >
          <AgGridReact
            theme="legacy"
            rowData={productList}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={25}
            paginationPageSizeSelector={false}
            animateRows={true}
            getRowId={(params) => params.data.id.toString()}
          />
        </div>
      </div>

      <ProductModal
        open={open}
        setOpen={setOpen}
        initialValues={newProduct}
        onSubmit={async (productObj) => {
          if (newProduct) {
            await updateMutation.mutateAsync({
              ...productObj,
              id: newProduct.id,
            });
          } else {
            await registerMutation.mutateAsync(productObj);
          }
        }}
      />
    </>
  );
};

export default ProductTable;