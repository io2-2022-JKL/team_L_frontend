import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";
import "./Navbar.css";

import Auth from "../services/Auth";

export default function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  const [title, setTitle] = useState("");
  const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();

  useEffect(() => {
    const data = window.localStorage.getItem("title");
    if (data !== null) setTitle(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("title", JSON.stringify(title));
  }, [title]);

  function logout() {
    Auth.logout();
    navigate("/login");
    window.location.reload();
  }

  return (
    <div>
      <IconContext.Provider value={{ color: "fff" }}>
        <div className="navbar row">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="text-center">
            <h2>{title}</h2>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <Link to="#" className="menu-close">
              <AiIcons.AiOutlineClose />
            </Link>
            {props.sidebarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={item.cName}
                  onClick={() => setTitle(item.title)}
                >
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li key="logout" className="nav-text">
              <div className="logout" onClick={logout}>
                <AiIcons.AiOutlineLogout />
                <span>Log out</span>
              </div>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}
