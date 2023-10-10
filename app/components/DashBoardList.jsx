"use client";
import React from "react";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { MdLocalActivity, MdTask } from "react-icons/md";
import { IconContext } from "react-icons";

const routes = [
  {
    title: "Dashboard",
    icon: <AiFillHome />,
  },
  {
    title: "employees",
    icon: <FaUserAlt />,
    submenu: {
      title: "PROFILE",
      icon: <FaUserAlt />,
    },
  },
  {
    title: "projects",
    icon: <AiFillProject />,
  },
  {
    title: "attendance",
    icon: <MdTask />,
  },
  {
    title: "clients",
    icon: <MdLocalActivity />,
  },

  {
    title: "leave Managemnt",
    icon: <RiLogoutBoxRFill />,
  },
];

export default function DashBoardList() {
  return (
    <>
      {routes.map((route) => (
        <div key={route.title} className="flex gap-5 mt-4">
          <IconContext.Provider
            value={{
              color: "#a0a2a5",
              className: "global-class-name",
              size: "24",
            }}
          >
            <>{route.icon}</>
            <h2>{route.title}</h2>
          </IconContext.Provider>
        </div>
      ))}
    </>
  );
}
