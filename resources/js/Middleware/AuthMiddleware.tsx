import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthMiddleware = () => {
    const token = localStorage.getItem("auth-token");

    return token ? <Outlet /> : <Navigate to="/login" />
}

export default AuthMiddleware;