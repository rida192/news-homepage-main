import { useState } from "react";
import Image from "next/image";
import logo from "../public/assets/images/logo.svg";
import burgerIcon from "../public/assets/images/icon-menu.svg";
import closeIcon from "../public/assets/images/icon-menu-close.svg";
const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);
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
          <h3>Home</h3>
          <h3>New</h3>
          <h3>Popular</h3>
          <h3>Trending</h3>
          <h3>Categories</h3>
        </div>
        {/* menu toggler */}

        <button className="md:hidden">
          <Image src={burgerIcon} width={40} height={19} alt="burger-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
