import React, { useState } from "react";
import "../../App.css";
import "./Sidebar.css";
import { FaBars } from "react-icons/fa"; // Icon library for the hamburger menu

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-container">
      {/* Hamburger Menu Icon */}
      <button className="hamburger-menu" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <nav className="dropdown-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-the-artist">About The Artist</a>
            </li>
            <li>
              <a href="/what-our-clients-say">What Our Clients Say</a>
            </li>
            <li>
              <a href="/request-a-custom-icon">Request a Custom Icon</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
