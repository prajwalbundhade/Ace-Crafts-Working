import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import Dashboard from "./Admin/Dashboard/Dashboard";
import Posts from "./Admin/Posts/Posts";
import Add from "./Admin/Posts/NewPost";
import NotFound from "./layouts/PageNotFound";
import { AuthToken } from "./Api/Api";
import EditPost from "./Admin/Posts/EditPost";

function PrivateRoute({ children }) {
  const token = AuthToken();
  return token ? children : <Navigate to="/Login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Navigate to="/Login" />} />

        {/* Protected Routes */}
        <Route
          path="/Admin"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/Admin/Dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/Admin/Posts"
          element={
            <PrivateRoute>
              <Posts />
            </PrivateRoute>
          }
        />
        <Route
          path="/Admin/Post/New"
          element={
            <PrivateRoute>
              <Add />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/Admin/Post/Edit/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
