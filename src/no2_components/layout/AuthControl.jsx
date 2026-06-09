import React from 'react';
import { getCurrentUser } from '../../no3_store/hooks/useUser';

const AuthControl = ({
  message = '로그인 후 이용 가능합니다.',
}) => {
  const user = getCurrentUser();
  const isLogin = !!user;

  if (isLogin) return null;

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '500px',
        background: '#fff',
        borderRadius: '20px',
        padding: '40px',
        textAlign: 'center',
        boxShadow: '0 4px 20px rgba(15,23,42,0.08)',
        border: '1px solid #e2e8f0',
      }}
    >
      <div
        style={{
          fontSize: '42px',
          marginBottom: '12px',
        }}
      >
        🔒
      </div>

      <h2
        style={{
          color: '#0f172a',
          marginBottom: '12px',
        }}
      >
        로그인이 필요합니다
      </h2>

      <p
        style={{
          color: '#64748b',
          lineHeight: '1.6',
        }}
      >
        {message}
      </p>
    </div>
  );
};

export default AuthControl;