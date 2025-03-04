import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import Dashboard from "./Admin/Dashboard/Dashboard";
import Posts from "./Admin/Posts/Posts";
// import Categories from "./Admin/Categories/Categories";
// import Inbox from "./Admin/Inbox/Inbox";
// import Accounts from "./Admin/Accounts/Accounts";
import Add from "./Admin/Posts/NewPost";
// import ViewMessage from "./Admin/Inbox/ViewMessage";
import NotFound from "./layouts/PageNotFound";
import { AuthToken } from "./Api/Api";
import EditPost from "./Admin/Posts/EditPost";
// Higher-order component for private routes
function PrivateRoute({ children }) {
  const token = AuthToken(); // Retrieve auth token from session
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
        {/* <Route
          path="/Admin/Categories"
          element={
            <PrivateRoute>
              <Categories />
            </PrivateRoute>
          }
        />
        <Route
          path="/Admin/Inbox"
          element={
            <PrivateRoute>
              <Inbox />
            </PrivateRoute>
          }
        />
        <Route
          path="/Admin/Inbox/:id"
          element={
            <PrivateRoute>
              <ViewMessage />
            </PrivateRoute>
          }
        />
        <Route
          path="/Admin/Accounts"
          element={
            <PrivateRoute>
              <Accounts />
            </PrivateRoute>
          }
        /> */}
        {/* <Route path="/Admin/Post/Edit/:id" element={<EditPost />} /> */}

        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />
        <Route path="/Admin/Post/Edit/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
