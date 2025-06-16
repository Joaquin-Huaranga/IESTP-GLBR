import React from "react";
import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "@/components/index.js";
import { Error404, Home, Careers, AboutUs } from "../pages/index.js";

export const Router = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <BaseLayout>
            <Home />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/careers/:type"
        element={
          <BaseLayout>
            <Careers />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/about-us/:infoType"
        element={
          <BaseLayout>
            <AboutUs />
          </BaseLayout>
        }
      />
      <Route exact path="*" element={<Error404 />} />
    </Routes>
  );
};
