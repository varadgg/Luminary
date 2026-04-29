import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem('adminToken');

  if (!token) {
    // Redirect to login if token is not present
    return <Navigate to="/login" replace />;
  }

  // Render children (the protected route) if token exists
  return children;
}
