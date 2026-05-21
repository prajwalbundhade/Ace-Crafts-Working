import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faFileAlt, faPlus, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { to: "/Admin/Dashboard", icon: faChartSimple, label: "Dashboard" },
    { to: "/Admin/Posts", icon: faFileAlt, label: "Mods" },
    { to: "/Admin/Post/New", icon: faPlus, label: "Add Mod" },
  ];

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("AdminName");
    navigate("/Login");
  };

  return (
    <nav className="admin-sidebar-nav">
      <div className="admin-sidebar-kicker">Control Panel</div>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          aria-label={link.label}
          className={`admin-sidebar-link ${
            location.pathname === link.to ||
            (location.pathname === "/Admin" && link.to === "/Admin/Dashboard") ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={link.icon} />
          <span>{link.label}</span>
        </Link>
      ))}
      <button type="button" className="admin-sidebar-link admin-logout" onClick={handleLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <span>Logout</span>
      </button>
    </nav>
  );
}

export default SideBar;
