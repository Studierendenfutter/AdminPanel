import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import useAuthToken from "../../services/hooks/useAuthToken";

import "./Navbar.css";

export default function Navbar({ children }) {
  const [authToken] = useAuthToken();
  const [navbarPushedMobile, setNavbarPushedMobile] = useState(false);

  return (
    <div>
      <div className="sf-admin-topbar">
        <div>
          <h1>Admin Panel</h1>
        </div>
        {authToken && (
          <Icon
            className="sf-admin-sidebar-button"
            onClick={() => setNavbarPushedMobile(!navbarPushedMobile)}
            name="sidebar"
            size="large"
          />
        )}
      </div>
      {authToken && (
        <div
          className={`sf-admin-sidebar ${
            navbarPushedMobile ? "sf-admin-sidebar-opened" : ""
          }`}
        >
          <Link as="span" to="/stats">
            Stats
          </Link>
          <Link as="span" to="/cities">
            Cities
          </Link>
          <Link as="span" to="/users">
            Users
          </Link>
          <Link as="span" to="/canteens">
            Canteens
          </Link>
          <Link as="span" to="/mealRecommendations">
            Meal Tips
          </Link>
        </div>
      )}
      <div className="sf-admin-content">{children}</div>
    </div>
  );
}
