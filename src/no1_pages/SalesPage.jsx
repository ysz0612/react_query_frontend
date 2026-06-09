import React from 'react';
import SalesTable from '../no2_components/product/sales/SalesTable';
import { getCurrentUser } from '../no3_store/hooks/useUser';
import AuthControl from '../no2_components/layout/AuthControl';

const SalesPage = () => {
  const user = getCurrentUser();

  if (!user) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <AuthControl
          message="로그인 후 판매 정보를 조회할 수 있습니다."
        />
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          background: '#fff',
          borderRadius: '20px',
          padding: '28px',
          boxShadow: '0 4px 20px rgba(15,23,42,0.06)',
          border: '1px solid #e2e8f0',
        }}
      >
        <h1
          style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#0f172a',
            marginBottom: '8px',
          }}
        >
          판매 정보
        </h1>

        <p
          style={{
            color: '#64748b',
            marginBottom: '28px',
          }}
        >
          판매 내역 및 주문 정보를 확인할 수 있습니다.
        </p>

        <SalesTable />
      </div>
    </div>
  );
};

export default SalesPage;