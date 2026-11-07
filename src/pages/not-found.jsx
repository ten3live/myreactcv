// src/pages/NotFound.jsx
import {CButton} from '../ui'
import { useNavigate } from 'react-router-dom';
export default function NotFound() {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>404</h1>
      <p>Page not found</p>
      <CButton onClick={handleGoBack}>Back</CButton>
    </div>
  );
}
