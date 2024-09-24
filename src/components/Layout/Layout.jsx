import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Shop from "../../pages/Shop/Shop";
import Cart from "../../pages/Cart/Cart";

export default function Layout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Outlet />
    </>
  );
}
