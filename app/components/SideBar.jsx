import React from "react";
import Logo from "../../public/atrioic.png";
import Image from "next/image";
import Profile from "../../public/profile-img.jpeg";
import DashBoardList from "./DashBoardList";

export default function SideBar() {
  const imageStyle = {
    borderRadius: "25px",
  };
  return (
    <main className=" bg-white-pure col-[1_/_span_2] row-[1_/_span_3]">
      <div className="flex items-center ">
        <Image
          src={Logo}
          alt="Atriohr Logo"
          width={70}
          quality={100}
          placeholder="blur"
        />
        <h2 className="font-bold">AtrioHR</h2>
      </div>
      <div className="">
        <Image
          src={Profile}
          alt="Atriohr Logo"
          width={80}
          quality={100}
          placeholder="blur"
          style={imageStyle}
        />
        <h4 className="font-semibold">Emily Smith</h4>
        <p className="text-light-grey font-light text-sm">Manager</p>
      </div>
      <DashBoardList />
    </main>
  );
}
