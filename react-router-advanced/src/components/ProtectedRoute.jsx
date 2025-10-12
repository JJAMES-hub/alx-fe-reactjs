import React from "react";
import { Navigate } from "react-router-dom";

// Simulate authentication state
const isAuthenticated = false; // Change to true to simulate logged-in state

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    alert("You must be logged in to access this page!");
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
