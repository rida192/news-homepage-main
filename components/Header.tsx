import { useState } from "react";
import Image from "next/image";
import logo from "../public/assets/images/logo.svg";
import burgerIcon from "../public/assets/images/icon-menu.svg";
import closeIcon from "../public/assets/images/icon-menu-close.svg";
import Links from "./Links";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="pt-[27px] md:pt-[88px]">
      <div className="container flex justify-between items-center">
        <Image
          className="w-[45px] h-[30px] md:w-[64px] md:h-[41px]"
          src={logo}
          width={64}
          height={41}
          alt="logo"
          priority
        />
        <div className="hidden md:flex space-x-[40px] text-DarkGrayishBlue [&>*:hover]:text-SoftRed [&>*]:transition-all [&>*]:duration-200 [&>*]:cursor-pointer ">
          <Links />
        </div>
        {/* menu toggler */}

        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <Image src={burgerIcon} width={40} height={19} alt="burger-icon" />
        </button>
      </div>
      {/* mobile menu */}
      <div
        className={`fixed top-0 h-screen w-[calc(60%+28px)] bg-white pt-[27px] pr-[21px] z-[21] pl-[25px] md:hidden transition-all duration-300 ${
          isOpen ? "right-0" : "-right-full"
        } space-y-[35px] font-bold text-VeryDarkBlue text-base  [&>*:hover]:text-SoftRed [&>*]:transition-all [&>*]:duration-200 [&>*]:cursor-pointer `}
      >
        <button
          className="md:hidden ml-auto block mb-[94px]"
          onClick={() => setIsOpen(false)}
        >
          <Image src={closeIcon} width={31} height={31} alt="close-icon" />
        </button>
        <Links />
      </div>
      {/* black layer */}
      <div
        className={`${
          isOpen
            ? "fixed transition-all duration-300 inset-0 bg-black/60 "
            : "hidden"
        }`}
      ></div>
    </header>
  );
};

export default Header;
