import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "./route";
import MyPage from "../page/myPage";

const AppRouter = () => {
  let token = localStorage.getItem("token");
  return (
    <>
      <Routes>
        {token &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={Component} exact />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={<MyPage>{Component}</MyPage>}
          />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
