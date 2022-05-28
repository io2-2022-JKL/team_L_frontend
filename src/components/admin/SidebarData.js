import React from "react";
import * as FaIcons from "react-icons/fa";
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
    title: "Vaccination Centers",
    path: "vaccinationCenters",
    icon: <FaIcons.FaHospital />,
    cName: "nav-text",
  },
];
