import React from "react";
import DashBoardList from "../components/DashBoardList";

export default function Dashboard1() {
  const cardDetails = [
    {
      title: "Projects",
      stats: "125",
      percentage: " 24.7%",
      progress: 3,
    },
    {
      title: "New Employee",
      stats: "125",
      percentage: " 24.7%",
      progress: 3,
    },
    {
      title: "",
      stats: "125",
      percentage: " 24.7%",
      progress: 3,
    },
    {
      title: "Projects",
      stats: "125",
      percentage: " 24.7%",
      progress: 3,
    },
  ];
  return (
    <main>
      <div className="card"></div>
    </main>
  );
}
