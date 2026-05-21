import React from "react";
import SideBar from "./SideBar";
import Nav from "./Nav";

function AdminLayout({ Content, children }) {
  return (
    <div className="admin-shell">
      <Nav />
      <div className="admin-layout">
        <aside className="admin-sidebar">
          <SideBar />
        </aside>
        <main className="admin-main">
          {Content || children}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
