import React from 'react'
import AdminLayout from "../../layouts/AdminLayout";

function Dashboard() {
  const content = (
    <section className="admin-page">
      <div className="admin-page-header">
        <div>
          <span className="admin-eyebrow">Overview</span>
          <h1>Dashboard</h1>
          <p>Manage your mod catalog, review listings, and keep the storefront ready for customers.</p>
        </div>
      </div>
      <div className="admin-empty-state">
        <h2>Welcome back</h2>
        <p>Your active tools are focused on mod listings: view, reorder, add, edit, and remove posts.</p>
      </div>
    </section>
  );

  return <AdminLayout Content={content} />;
}

export default Dashboard
