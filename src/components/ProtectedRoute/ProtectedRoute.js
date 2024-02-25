import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ element, isLoggedIn }) {
  return isLoggedIn ? element : <Navigate to="/" replace />;
}
