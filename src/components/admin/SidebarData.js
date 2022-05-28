import React from "react";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";

export const sidebarData = [
  {
    title: "Home",
    path: "",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Patients",
    path: "patients",
    icon: <FaIcons.FaUser />,
    cName: "nav-text",
  },
  {
    title: "Doctors",
    path: "doctors",
    icon: <FaIcons.FaUserNurse />,
    cName: "nav-text",
  },
  {
    title: "Vaccines",
    path: "vaccines",
    icon: <GiIcons.GiLoveInjection />,
    cName: "nav-text",
  },
];
