import React from "react";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";

export const sidebarData = [
  {
    title: "Home",
    path: "",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Former Appointments",
    path: "formerAppointments",
    icon: <GiIcons.GiLoveInjection />,
    cName: "nav-text",
  },
  {
    title: "Incoming Appointments",
    path: "incomingAppointments",
    icon: <GiIcons.GiCalendar />,
    cName: "nav-text",
  },
  {
    title: "Time Slots",
    path: "timeSlots",
    icon: <BiIcons.BiTime />,
    cName: "nav-text",
  },
  {
    title: "Certificates",
    path: "certificates",
    icon: <AiIcons.AiFillSafetyCertificate />,
    cName: "nav-text",
  },
];
