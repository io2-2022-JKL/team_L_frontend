import React from "react";
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
    icon: <GiIcons.GiSandsOfTime />,
    cName: "nav-text",
  },
];
