import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="h-[60px] w-full  md:h-[80px] flex items-center z-20 text-black fixed top-0 ">
      <div className="containers  w-full h-full px-4 ">
        <div className=" h-full w-[98%] mx-auto flex items-center justify-between">
          <div className="  text-black">
            <img
              src="/images/anytype.svg"
              className=" w-[65px] h-[16px]"
              alt="home"
            />
          </div>
          
          <div className=" w-fit whitespace-nowrap h-full flex items-center ">
            <Link
              href="https://download.anytype.io/"
              target="_blank"
              rel="nofollow"
              className="pointer-events-auto text-14-400 mr-[15px]  ml-auto"
            >
               Get the app 
            </Link>
            <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <g fill="none" stroke="black" stroke-width="2">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
  </g>
</svg></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
