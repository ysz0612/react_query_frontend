import React from 'react';
import { useGetSales } from '../../../no3_store/hooks/useSales';
import { AgGridReact } from 'ag-grid-react';

const SalesTable = () => {
  const rowData = useGetSales();

  const columnDefs = [
    { field: 'id', headerName: '주문 번호', flex: 1 },
    { field: 'user_name', headerName: '회원명', flex: 1 },
    { field: 'product_name', headerName: '상품명', flex: 1.5 },
    { field: 'quantity', headerName: '수량', flex: 1 },
    { field: 'discount_rate', headerName: '할인율', flex: 1 },
    { field: 'total_price', headerName: '결제금액', flex: 1.2 },
    { field: 'created_at', headerName: '주문일자', flex: 1.5 },
  ];

  return (
    <>
      <style>
        {`
        .sales-grid.ag-theme-alpine {
          --ag-background-color: white;
          --ag-header-background-color: #f8fafc;
          --ag-border-color: #e2e8f0;
          --ag-row-hover-color: #f8fafc;
          --ag-font-size: 14px;
        }

        .sales-grid .ag-root-wrapper {
          border: 1px solid #e2e8f0 !important;
          border-radius: 16px;
          overflow: hidden;
        }

        .sales-grid .ag-header {
          border-bottom: 1px solid #e2e8f0;
        }

        .sales-grid .ag-header-cell {
          font-weight: 700;
          color: #334155;
        }

        .sales-grid .ag-row {
          transition: background .15s ease;
        }

        .sales-grid .ag-row:hover {
          background: #f8fafc !important;
        }

        .sales-grid .ag-cell {
          display: flex;
          align-items: center;
          color: #475569;
        }

        .sales-grid .ag-paging-panel {
          border-top: 1px solid #e2e8f0 !important;
          background: white;
          height: 56px;
        }
        `}
      </style>

      <div
        className="ag-theme-alpine sales-grid"
        style={{
          width: '100%',
          height: '700px',
        }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={25}
        />
      </div>
    </>
  );
};

export default SalesTable;