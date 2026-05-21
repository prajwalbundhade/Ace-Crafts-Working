import React from "react";
import { Link } from "react-router-dom";
import { AdminName } from "../Api/Api";

function Nav(){
return(
    <nav className="admin-topbar">
        <Link to="/Admin/Posts" className="admin-brand">
            <span className="admin-brand-mark">AC</span>
            <span>Ace Crafts Admin</span>
        </Link>
        <div className="admin-user">
            <div>
                <span className="admin-user-label">Signed in</span>
                <p><AdminName/></p>
            </div>
            <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
        </div>
    </nav>

);
}
export default Nav;
