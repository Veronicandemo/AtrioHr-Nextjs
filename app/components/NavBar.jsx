import React from "react";
import "./NavBar.css";
import { HiMenu } from "react-icons/hi";
import { RiFullscreenFill } from "react-icons/ri";
import { MdNotificationsNone, MdSettings } from "react-icons/md";
import Image from "next/image";
import Profile from "../../public/profile-img.jpeg";

export default function NavBar() {
  const size = { size: 28 };
  return (
    <nav className="bg-light-grey col-[2_/_span_3] row-[1_/_span_2] ">
      <ul>
        <li>
          <HiMenu size={28} />
        </li>
        <li>
          <RiFullscreenFill size={28} />
        </li>
        <li>
          <MdNotificationsNone size={28} />
        </li>
        <li>
          <Image
            src={Profile}
            alt="Atriohr Logo"
            width={30}
            className="rounded-full"
            quality={100}
            placeholder="blur"
          />
        </li>
        <li>
          <MdSettings size={28} />
        </li>
      </ul>
    </nav>
  );
}
