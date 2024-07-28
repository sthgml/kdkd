import React from "react";

import Layout from "./components/Layout";

import LandingPage from "./pages/LandingPage";
import MyPage from "./pages/MyPage";

import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/mypage", element: <MyPage /> },
    ],
    errorElement: <ErrorPage />
  },
];

export default routes;
