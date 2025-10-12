import React from "react";
import { Navigate } from "react-router-dom";


function useAuth() {
  const user = { isAuthenticated: true }; // change to false to test redirect
  return user;
}

function ProtectedRoute({ children }) {
  const auth = useAuth(); 

  if (!auth.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
