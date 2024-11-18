import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Style from "./Navbar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button } from "../ComponentsIndex";
import images from "../../img";

import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  //states components
  const [activeMenu, setActiveMenu] = useState<string>("");

  const menu = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const btnText = e.currentTarget.innerText;
    setActiveMenu(btnText);
  };

  const openComponents = (name: string) => {
    if (!isActive("name")) {
      setActiveMenu("name");
    } else {
      setActiveMenu("empty");
    }
  };

  const setOpenSideMenu = () => {};

  const isActive = (menuName: string) => activeMenu === menuName;

  return (
    <div className={Style.Navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image
              src={images.logo}
              alt="NFT MARKET PLACE"
              width={100}
              height={100}
            />
            <div className={Style.navbar_container_left_box_input}>
              <div className={Style.navbar_container_left_box_input_box}>
                <input type="text" placeholder="search NFT" />
                <BsSearch onClick={() => {}} className={Style.search_icon} />
              </div>
            </div>
          </div>
        </div>
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            <p onClick={(e) => menu(e)}>Discover</p>
            {isActive("Discover") && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => menu(e)}>Help Center</p>
            {isActive("Help Center") && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notify}
              onClick={() => openComponents("Notification")}
            />
            {isActive("notification") && <Notification />}
          </div>

          <div className={Style.navbar_container_right_button}>
            <Button btntext=" Create" />
          </div>

          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openComponents("Profile")}
                className={Style.navbar_container_right_profile}
              />

              {isActive("Profile") && <Profile />}
            </div>
          </div>

          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openComponents("SideBar")}
            />
          </div>

          {isActive("SideBar") && (
            <div className={Style.SideBar}>
              <SideBar setOpenSideMenu={setOpenSideMenu} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
