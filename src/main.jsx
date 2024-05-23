import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import HomeLayout from "./layouts/HomeLayout";
import Shop from "./pages/Shop";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import AdminLayout from "./layouts/admin/AdminLayout";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Login from "./auth/Login";
import { AuthProvider } from "./auth/AuthContext";
import PrivateRoutes from "./auth/PrivateRoutes";
import AdminQuotations from "./pages/admin/AdminQuotations";
import AdminReviews from "./pages/admin/AdminReviews";
import AdminTeams from "./pages/admin/AdminTeams";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="shop/:id" element={<ProductDetail />} />
        <Route path="login" element={<Login />} />
      </Route>
      {/* Admin-Related Routes */}
      <Route element={<PrivateRoutes />}>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="quotations" element={<AdminQuotations />} />
          <Route path="teams" element={<AdminTeams />} />
          <Route path="reviews" element={<AdminReviews />} />
        </Route>
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
