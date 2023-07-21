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
          <div className=" hidden md:block">
            <Link
              href="https://www.producthunt.com/products/anytype"
              target="_blank"
              rel="nofollow"
              className="flex text-14-400 items-center mr-5 text-red-500"
            >
              {/*[*/} Join us for our Product Hunt launch on July 19!{" "}
              <span
                className="nuxt-icon icon icon-arrow-right text-[10rem] ml-4"
                data-v-6aa3f129=""
              >
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 1L10.5 6M10.5 6L5.5 11M10.5 6H0.5"
                    stroke="currentColor"
                  />
                </svg>
              </span>
              {/*]*/}
            </Link>
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
