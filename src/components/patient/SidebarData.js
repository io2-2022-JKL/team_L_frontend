import React from "react";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";

export const sidebarData = [
  {
    title: "Home",
    path: "",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Time Slots",
    path: "timeSlots",
    icon: <BiIcons.BiTime />,
    cName: "nav-text",
  },
];
