import Card from "@/components/Home/Card";
import Gallary from "@/components/Home/Gallary";
import Kanban from "@/components/Home/Kanban";
import Table from "@/components/Home/Table";
import Link from "next/link";
import { useState } from "react";

const data = [
  {
    title: "Local-first",
    desc: "Crazy-fast loading times",
  },
  {
    title: "Peer-to-peer",
    desc: "Secure & decentralized sync",
  },
  {
    title: "Open-source",
    desc: "Verifiable autonomy & security",
  },
];

const cardData = [
  {
    title: "Daily journal",
    src: "/images/home/Daily-journals.jpg",
  },
  {
    title: "Strategic writing",
    src: "/images/home/Strategic-thinking.jpg",
  },
  {
    title: "Knowledge base",
    src: "/images/home/Knowledge-base.jpg",
  },
  {
    title: "Trip planner",
    src: "/images/home/trip-planner.jpg",
  },
  {
    title: "Study hub",
    src: "/images/home/Study-Hub.jpg",
  },
  {
    title: "Recipe book",
    src: "/images/home/Recipe-book.jpg",
  },
  {
    title: "Habit tracker",
    src: "/images/home/Habit-tracker.jpg",
  },
  {
    title: "Data vault",
    src: "/images/home/Vault.jpg",
  },
];

const cardData1 = [
  {
    title: "Team wiki",
  },
  {
    title: "Shareable docs",
  },
  {
    title: "Press kit",
  },
  {
    title: "Startup data room",
  },
  {
    title: "Curated lists",
  },
  {
    title: "Personal portfolio",
  },
];

const cardData2 = [
  {
    title: "Community hub",
  },
  {
    title: "Public Blog",
  },
  {
    title: "Shared graphs",
  },
  {
    title: "Collaborative Projects",
  },
];

export default function Home() {
  const [activeBut, setActiveBut] = useState("table");
  return (
    <>
    <div className=" w-full h-[80px] flex items-center justify-center">
    <div className=" hidden md:block">
            <Link
              href="https://www.producthunt.com/products/anytype"
              target="_blank"
              rel="nofollow"
              className="flex font-Inter text-[14px] items-center mr-5 text-red-500"
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
    </div>
      <section className="w-full  bg-white z-0 relative overflow-hidden bg-gradient-1">
        <div className=" max-w-[1600px] mx-auto w-full h-full pb-[78px] ">
          <div className=" md:mx-4 mx-3  h-full  border  border-gray-600  ">
            <div className="flex  flex-col md:flex-row max-w-[80%] mx-auto  gap-16     items-center justify-center md:py-[128px] py-[48px] ">
              {/* s */}
              <div className="flex    justify-end  items-start">
                <div className=" 2lg:w-[80%] w-full ">
                  <h1 className=" text-center md:text-left">
                    {/**/}
                    {/*[*/}
                    <span className="block md:text-[88px] text-[40px] font-[300] md:leading-[0.864] leading-[0.9] tracking-normal md:tracking-[-5.2px]">
                      {" "}
                      the&nbsp;everything&nbsp;app{" "}
                    </span>
                    <span className="block md:text-[88px] text-[40px] font-[300] md:leading-[0.864]  leading-[0.9] md:tracking-[-2.4px] tracking-normal  text-[#FF6A7B]">
                      for&nbsp;those <br /> who&nbsp;celebrate
                      trust&nbsp;&amp;&nbsp;autonomy
                    </span>
                    {/*]*/}
                  </h1>
                </div>
              </div>

              {/* e */}
              <div className="w-full flex justify-center ">
                <img
                  src="/images/home/Main.svg"
                  className=" max-w-full  w-[432px]"
                  alt="as"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-600">
              {data.map((item, index) => {
                return (
                  <>
                    <button
                      className="text-center  py-[64px] container-inner relative border-b w-full sm:border-b-0 sm:border-r last:border-b-0 last:border-r-0 border-gray-600"
                      type="button"
                      key={index}
                    >
                      <div
                        className="viewport-element-fade-in viewport-element is-visible"
                        style={{}}
                        data-v-dbbcdee0=""
                      >
                        {/**/}
                        {/*[*/}
                        <div className="text-[22px] font-[500] mb-[3px]">
                          {item.title}
                        </div>
                        <div className="text-[14px] font-[400]">
                          {item.desc}
                        </div>
                        <span
                          className="nuxt-icon icon w-[32px] h-[32px] icon-arrow-open-circle absolute right-8 top-8 text-[32px] text-gray-600"
                          data-v-6aa3f129=""
                        >
                          <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 10H22M22 10V18M22 10L10 22"
                              stroke="currentColor"
                            />
                            <circle
                              cx={16}
                              cy={16}
                              r="15.5"
                              stroke="currentColor"
                              fill="none"
                            />
                          </svg>
                        </span>
                        {/*]*/}
                      </div>
                    </button>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-[98px]  md:py-[196px] px-5 sm:mx-0">
        <div className="container">
          <h2
            data-v-dbbcdee0=""
            className=" text-[44px] font-Inter font-[400] md:leading-[76px] leading-[42px] md:px-9  md:text-[88px] text-center md:whitespace-pre-line mb-[34px] sm:mb-[82px]"
          >
            Imagine an app where you can do everything:
          </h2>
          <div className="md2:flex items-start md:px-[48px] mb-[42px] md:mb-[96px] last:mb-0">
            {/* start  */}
            <div className="flex justify-center text-[#808080] md:mt-[20px] mb-[20px] md:pr-[64px]">
              <div className=" md:min-w-[90px]">
                {/**/}
                <span className="md2:block  text-[18px] font-Inter font-[300]  md:text-[22px] md:font-[300] md2:text-14-400 md2:text-[14px] md2:font-[400] md2:uppercase mb-[4px] mr-[4px]">
                  Released
                </span>
                <span className="md2:block text-[18px] md:text-[22px] font-[300]">
                  Today
                </span>
              </div>
            </div>
            {/* end */}
            <div className=" flex flex-wrap -mr-[8px] -mb-[8px] sm:-mr-[12px] sm:-mb-[16px]">
              {cardData.map((item, index) => {
                return (
                  <>
                    <Card title={item.title} src={item.src} key={index} />
                  </>
                );
              })}
            </div>
          </div>
          {/*  start  */}
          <div className="md2:flex items-start md:px-[48px] mb-[42px] md:mb-[96px] last:mb-0">
            <div className="flex justify-center text-[#808080] md:mt-[20px] mb-[20px] md:pr-[64px]">
              <div className=" md:min-w-[90px]">
                {/**/}
                <span className="md2:block  text-[18px] font-Inter font-[300]  md:text-[22px] md:font-[300] md2:text-14-400 md2:text-[14px] md2:font-[400] md2:uppercase mb-[4px] mr-[4px]">
                  RELEASE
                </span>
                <span className="md2:block text-[18px] md:text-[22px] font-[300]">
                  3Q 2023
                </span>
              </div>
            </div>
            {/* end */}
            <div className=" flex flex-wrap -mr-[8px] -mb-[8px] sm:-mr-[12px] sm:-mb-[16px]">
              {cardData1.map((item, index) => {
                return (
                  <>
                    <Card title={item.title} key={index} />
                  </>
                );
              })}
            </div>
          </div>
          {/* s */}
          <div className="md2:flex items-start md:px-[48px] mb-[42px] md:mb-[96px] last:mb-0">
            <div className="flex justify-center text-[#808080] md:mt-[20px] mb-[20px] md:pr-[64px]">
              <div className=" md:min-w-[90px]">
                {/**/}
                <span className="md2:block  text-[18px] font-Inter font-[300]  md:text-[22px] md:font-[300] md2:text-14-400 md2:text-[14px] md2:font-[400] md2:uppercase mb-[4px] mr-[4px]">
                  RELEASE
                </span>
                <span className="md2:block text-[18px] md:text-[22px] font-[300]">
                  4Q 2024
                </span>
              </div>
            </div>
            {/* end */}
            <div className=" flex flex-wrap -mr-[8px] -mb-[8px] sm:-mr-[12px] sm:-mb-[16px] last:ml-1">
              {cardData2.map((item, index) => {
                return (
                  <>
                    <Card title={item.title} key={index} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="  text-black overflow-hidden py-[10px] sm:py-[16px]">
        <div className="containers relative bg-transparent">
          {/* start/ */}
          <div className="flex flex-col z-20 relative  sm:flex-row border-[1px] border-gray-700 ">
            <div className=" md:w-[50.11%] w-full flex items-center justify-center md:border-r-[1px] border-gray-700">
              <h3 className=" font-Inter  text-center text-[4rem] whitespace-pre-line md:text-[5.5rem] lg:text-[7.5rem] md:leading-[100px] leading-[3.5rem]  pt-[94px] md:pt-[5rem] px-[20px] pb-0 md:pb-[5rem] ">
                Enjoy
                <br /> true <br /> privacy
              </h3>
            </div>
            <div className="md:w-[50%] w-full md:pt-[96px] pt-[62px] md:pb-[106px] pb-[90px] px-[20px] flex flex-col justify-center items-center">
              <div className="w-[48px] border font-Inter text-[14px] flex items-center justify-center border-black h-[24px] mb-[38px]">
                1
              </div>
              <div className=" font-Inter font-[500] md:text-[48px] text-[28px] leading-[1] text-center mb-[66px] md:mb-[110px]">
                Protect your thoughts & <br /> data with end-to-end <br />
                encryption
              </div>
              <div className="flex gap-10 sm:gap-20 md:gap-30 w-full justify-center ">
                <div className="w-[148px] sm:w-[210px]">
                  <img
                    src="/images/home/locker.svg"
                    alt="as"
                    className="h-[96px] sm:h-[124px] md:h-[168px] mx-auto mb-[24px] md:mb-[44px]"
                  />
                  <div className="text-[1rem] md:text-[18px] font-[300] text-center m-auto sm:whitespace-pre-line">
                    Local, on-device encryption
                  </div>
                </div>
                <div className="w-[148px] sm:w-[210px]">
                  <img
                    src="/images/home/keys.svg"
                    alt="as"
                    className="h-[96px] sm:h-[124px] md:h-[168px] mx-auto mb-[24px] md:mb-[44px]"
                  />
                  <div className="text-[1rem] md:text-[18px] font-[300] text-center m-auto sm:whitespace-pre-line">
                    Only you have <br />
                    encryption keys
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
          {/* start/ */}
          <div className="flex flex-col   sm:flex-row border-[1px] border-t-0 border-gray-700 ">
            <div className=" md:w-[50%] md:order-2 order-1 w-full flex items-center justify-center md:border-l-[1px] border-gray-700">
              <h3 className=" font-Inter text-center text-[4rem] whitespace-pre-line md:text-[5.5rem] lg:text-[7.5rem] md:leading-[100px] leading-[3.5rem]  pt-[94px] md:pt-[5rem] px-[20px] pb-0 md:pb-[5rem] ">
                Never
                <br /> lose <br /> access
              </h3>
            </div>
            <div className="md:w-[50%]  z-[100]  md:order-1 order-2  w-full md:pt-[96px] pt-[62px] md:pb-[106px] pb-[90px] px-[20px] flex flex-col justify-center items-center">
              <div className="w-[48px] border font-Inter text-[14px] flex items-center justify-center border-black h-[24px] mb-[38px]">
                2
              </div>
              <div className=" font-Inter font-[500] md:text-[48px] text-[28px] leading-[1] text-center mb-[66px] md:mb-[110px]">
                Nobody can stop you
                <br /> from accessing your
                <br /> account
              </div>
              <div className="flex gap-10 sm:gap-20 md:gap-30 w-full justify-center ">
                <div className="w-[148px] sm:w-[210px]">
                  <img
                    src="/images/home/offline.svg"
                    alt="as"
                    className="h-[96px] sm:h-[124px] md:h-[168px] mx-auto mb-[24px] md:mb-[44px]"
                  />
                  <div className="text-[1rem] md:text-[18px] font-[300] text-center m-auto sm:whitespace-pre-line">
                    Offline account creation: control your keys, own your data
                  </div>
                </div>
                <div className="w-[148px] sm:w-[210px]">
                  <img
                    src="/images/home/no-server.svg"
                    alt="as"
                    className="h-[96px] sm:h-[124px] md:h-[168px] mx-auto mb-[24px] md:mb-[44px]"
                  />
                  <div className="text-[1rem] md:text-[18px] font-[300] text-center m-auto sm:whitespace-pre-line">
                    No server, no gatekeeper: peer-to-peer sync on local
                    networks
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
          {/* start/ */}
          <div className="flex flex-col z-50  sm:flex-row border-[1px] border-t-0 border-gray-700 ">
            <div className=" md:w-[50.11%]  w-full flex items-center justify-center md:border-r-[1px] border-gray-700">
              <h3 className=" font-Inter text-center text-[4rem] whitespace-pre-line md:text-[5.5rem] lg:text-[7.5rem] md:leading-[100px] leading-[3.5rem]  pt-[94px] md:pt-[5rem] px-[20px] pb-0 md:pb-[5rem] ">
                Trust,
                <br />
                not
                <br />
                belief
              </h3>
            </div>
            <div className="md:w-[50%]   w-full md:pt-[96px] pt-[62px] md:pb-[106px] pb-[90px] px-[20px] flex flex-col justify-center items-center">
              <div className="w-[48px] border font-Inter text-[14px] flex items-center justify-center border-black h-[24px] mb-[38px]">
                3
              </div>
              <div className=" font-Inter font-[500] md:text-[48px] text-[28px] leading-[1] text-center mb-[66px] md:mb-[110px]">
                Pure transparency — <br /> trust our code, not our
                <br /> words
              </div>
              <div className="flex gap-10 sm:gap-20 md:gap-30 w-full justify-center ">
                <div className="w-[148px] sm:w-[210px]">
                  <img
                    src="/images/home/backup.svg"
                    alt="as"
                    className="h-[96px] sm:h-[124px] md:h-[168px] mx-auto mb-[24px] md:mb-[44px]"
                  />
                  <div className="text-[1rem] md:text-[18px] font-[300] text-center m-auto sm:whitespace-pre-line">
                    Locally store your data, self-host your backups where you
                    please
                  </div>
                </div>
                <div className="w-[148px] sm:w-[210px]">
                  <img
                    src="/images/home/build.svg"
                    alt="as"
                    className="h-[96px] sm:h-[124px] md:h-[168px] mx-auto mb-[24px] md:mb-[44px]"
                  />
                  <div className="text-[1rem] md:text-[18px] font-[300] text-center m-auto sm:whitespace-pre-line">
                    Open protocols, build apps freely, no permission required
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
          {/* gradient start */}
          <div className=" absolute  right-[-620px] z-[-1] md:top-[500px] top-[640px] bg-gradient-2 md:h-[512px] h-[324px] md:w-[1024px] w-[900px]" />
          <div className=" absolute  left-[-480px] md:left-[-500px] z-[-1] bottom-[690px] md:bottom-[540px] bg-gradient-3 md:h-[512px] h-[324px] md:w-[1024px] w-[900px]" />
          <div className=" absolute  right-[-480px] md:right-[-400px] z-[-1] bottom-[-150px] md:bottom-[-250px] bg-gradient-4 md:h-[512px] h-[324px] md:w-[1024px] w-[900px]" />
          {/* gradient end */}
        </div>
      </section>
      <section className="bg-black font-Inter text-white pt-[96px] md:pt-[172px]">
        <div className="containers">
          <h2 className=" px-[10px] sm:mx-0 text-[44px] leading-[1.1] sm:text-[64px] md:text-[120px] text-center mb-[78px]">
            {/**/} Compose beautifully{" "}
          </h2>
        </div>
        <div className="containers">
          <div className="sm:grid sm:grid-cols-2 md:grid-cols-3">
            <div className=" container-inner flex items-center justify-center text-center col-span-2 border-b md:border-[1px] border-gray-800 md:order-1 pb-[42px] sm:pb-[64px] md:pb-0">
              <h4
                data-v-dbbcdee0=""
                className="  text-[28px] leading-[1.2] font-[500] sm:text-[36px] sm:leading-[36px] md:text-[48px] tracking-[-2.4px] md:leading-[48px]"
              >
                {/**/} Powerful, no-code creation:{" "}
                <span className="text-[#666666] block sm:whitespace-pre-line">
                  Compose anything you can <br /> imagine visually
                </span>
              </h4>
            </div>
            <div className="pt-[28px]  pb-[48px] sm:pt-[40px] sm:pb-[62px] px-[32px] border-[1px] border-t-0 border-b-0 sm:border-r-0 md:border-t  border-gray-800 md:order-0">
              <h4 className=" text-[18px]   sm:text-[22px] font-[500]  text-center ">
                {/**/}Block-based editor
              </h4>
              <div className=" mx-auto max-w-[336px] ">
                {/**/}
                <img
                  src="/images/home/editor.svg"
                  className="mt-[26px] sm:mt-[16px]"
                />
              </div>
            </div>
            {/* start */}
            <div className="pt-[28px] pb-[48px] sm:pt-[40px] sm:pb-[62px] px-[32px] border  md:border-r-0 border-gray-800 md:order-2">
              <h4 className=" text-[18px] font[-500] sm:text-[22px] text-center ">
                {/**/}Data-bases
              </h4>
              <div className="grid grid-cols-2 gap-8 mt-[26px] sm:mt-[50px] mx-auto max-w-[336px]">
                <div className="">
                  {/**/}
                  <img src="/images/home/kanban/base1.svg" />
                </div>
                <div>
                  {/**/}
                  <img src="/images/home/kanban/base2.svg" />
                </div>
                <div>
                  {/**/}
                  <img src="/images/home/kanban/base3.svg" />
                </div>
                <div>
                  {/**/}
                  <img src="/images/home/kanban/base4.svg" />
                </div>
              </div>
            </div>

            {/* end */}
            {/* start */}
            <div className="pt-[28px] pb-[48px] sm:pt-[40px] sm:pb-[62px] px-[32px] border border-t-0 sm:border-r-0 border-gray-800 md:order-2">
              <h4 className=" text-[18px] font-[500] sm:text-[22px] text-center">
                Templates
              </h4>
              <div className="max-w-[380px] mx-auto">
                <div className="-mr-[12px] -mb-[12px] md:-mr-[16px] md:-mb-[16px] mt-[26px] sm:mt-[50px]">
                  <div className="flex justify-center">
                    <div
                      data-v-dbbcdee0=""
                      className=" mr-[12px] mb-[12px] md:mr-[16px] md:mb-[16px]"
                      style={{ width: "95.61%", maxWidth: "99px" }}
                    >
                      {/**/}
                      <img
                        src="/images/home/templates/1.svg"
                        className="w-full"
                      />
                    </div>
                    <div
                      className=" mr-[12px] mb-[12px] md:mr-[16px] md:mb-[16px] "
                      style={{
                        width: "30.5263%",
                        maxWidth: "116px",
                      }}
                    >
                      {/**/}
                      <img
                        src="/images/home/templates/2.svg"
                        className="w-full"
                      />
                    </div>
                    <div
                      data-v-dbbcdee0=""
                      className="mr-[12px] mb-[12px] md:mr-[16px] md:mb-[16px]"
                      style={{
                        width: "26.5789%",
                        maxWidth: "101px",
                      }}
                    >
                      {/**/}
                      <img
                        src="/images/home/templates/3.svg"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div
                      data-v-dbbcdee0=""
                      className="mr-[12px] mb-[12px] md:mr-[16px] md:mb-[16px]"
                      style={{ width: "25.5263%", maxWidth: "97px" }}
                    >
                      {/**/}
                      <img
                        src="/images/home/templates/4.svg"
                        className="w-full"
                      />
                    </div>
                    <div
                      data-v-dbbcdee0=""
                      className="mr-[12px] mb-[12px] md:mr-[16px] md:mb-[16px]"
                      style={{
                        width: "32.6316%",
                        maxWidth: "124px",
                      }}
                    >
                      {/**/}
                      <img
                        src="/images/home/templates/5.svg"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div
                      className="mr-[12px] mb-[12px] md:mr-[16px] md:mb-[16px]"
                      style={{ width: "23.4211%", maxWidth: "89px" }}
                    >
                      {/**/}
                      <img
                        src="/images/home/templates/6.svg"
                        className="w-full"
                      />
                    </div>
                    <div
                      data-v-dbbcdee0=""
                      className="mr-[12px] mb-[12px] md:mr-[16px] md:mb-[16px]"
                      style={{
                        width: "36.0526%",
                        maxWidth: "137px",
                      }}
                    >
                      {/**/}
                      <img
                        src="/images/home/templates/7.svg"
                        className="w-full"
                      />
                    </div>
                    <div
                      data-v-dbbcdee0=""
                      className="mr-[12px] mb-[12px] md:mr-[16px] md:mb-[16px]"
                      style={{
                        width: "25.2632%",
                        maxWidth: "96px",
                      }}
                    >
                      {/**/}
                      <img
                        src="/images/home/templates/8.svg"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div
                      data-v-dbbcdee0=""
                      className="mr-[12px] mb-[12px] md:mr-[16px] md:mb-[16px]"
                      style={{ width: "36.8421%", maxWidth: "140px" }}
                    >
                      {/**/}
                      <img
                        src="/images/home/templates/9.svg"
                        className="w-full"
                      />
                    </div>
                    <div
                      data-v-dbbcdee0=""
                      className="mr-[12px] mb-[12px] md:mr-[16px] md:mb-[16px]"
                      style={{
                        width: "28.1579%",
                        maxWidth: "107px",
                      }}
                    >
                      {/**/}
                      <img
                        src="/images/home/templates/10.svg"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end */}
            {/* start  */}
            <div className="pt-[28px] pb-[48px] sm:pt-[40px] sm:pb-[62px] px-[32px] border border-t-0 border-gray-800 md:order-2">
              <h4
                data-v-dbbcdee0=""
                className=" text-[18px] font-[500] sm:text-[22px] text-center"
              >
                {/**/}Widgets
              </h4>
              <div
                data-v-dbbcdee0=""
                className=" mt-[26px] sm:mt-[50px] mx-auto max-w-[336px]"
              >
                {/**/}
                <img src="/images/home/galary/1.png" className="w-full" />
              </div>
            </div>

            {/* end */}
          </div>
        </div>
      </section>
      <section className="bg-black text-white  pb-[92px]">
        <div className="containers">
          <div className="border border-t-0 border-gray-800 pt-[42px] md:pt-[124px] pb-[48px] sm:pb-[108px] px-[32px]">
            <h3
              data-v-dbbcdee0=""
              className=" text-[28px] leading-[1] font-[500] sm:text[-36px] md:text-[48px] text-white text-center sm:whitespace-pre-line mb-[36px] sm:mb-[46px] "
            >
              {/**/} Single objects, infinite possibilities{" "}
              <span className="text-gray-500 block">
                Visualise connections using graph &amp; <br /> database views
              </span>
            </h3>
            {/* button start */}
            <div className="flex justify-center mb-[36px] sm:mb-[60px]">
              <ul className=" relative flex justify-center text-[18px] font-[500] md:text-[22px] ">
                <li>
                  <button
                    className={` ${
                      activeBut === "table"
                        ? " border-b-[0.5px]  border-gray-300 text-white"
                        : "text-gray-400"
                    }  pb-[10px] w-[95px] sm:w-[136px] transition-colors hover:text-white `}
                    onClick={() => {
                      setActiveBut("table");
                    }}
                  >
                    Table
                  </button>
                </li>
                <li>
                  <button
                    className={` ${
                      activeBut === "kanban"
                        ? " border-b-[0.5px]  border-gray-300 text-white"
                        : "text-gray-400"
                    } pb-[10] w-[95px] sm:w-[136px] transition-colors hover:text-white `}
                    onClick={() => {
                      setActiveBut("kanban");
                    }}
                  >
                    Kanban
                  </button>
                </li>
                <li>
                  <button
                    className={` ${
                      activeBut === "gallary"
                        ? " border-b-[0.5px]  border-gray-300 text-white"
                        : "text-gray-400"
                    } pb-[10px] w-[95px] sm:w-[136px] transition-colors hover:text-white `}
                    onClick={() => {
                      setActiveBut("gallary");
                    }}
                  >
                    Gallery
                  </button>
                </li>
              </ul>
            </div>
            {/* button end  */}
            {
              {
                table: <Table />,
                kanban: <Kanban />,
                gallary: <Gallary />,
              }[activeBut]
            }
          </div>
        </div>
      </section>
      <section className="relative   overflow-hidden bg-transparent text-black">
        <div className=" bg-gradient-5 z-[-1] bottom-0 absolute right-0 h-[600px]  md:h-[1200px] w-[600px] " />
        <div className="container z-10 py-[94px] md:py-[160px]">
          <h3 className=" text-center mb-[86px] text-[64px] sm:text-[88px] leading-[1]">
            Think fast
          </h3>
          {/* start */}
          <div className="md:flex justify-center">
            <div
              data-v-dbbcdee0=""
              className="viewport-element-fade-in viewport-element mb-[44px] sm:mb-[70px] last:mb-0 min-w-[320px] md:mx-[32px] lg:mx-[64px] is-visible"
            >
              {/**/}
              <div className="text-center">
                <div className="mb-[18px] sm:mb-[22px] flex justify-center items-end">
                  <div className="mx-[8px] sm:mx-[10px] min-h-[48px] sm:min-h-[64px]">
                    <img
                      src="/images/home/home.svg"
                      className="max-w-[64px] sm:max-w-[96px]"
                    />
                  </div>
                </div>
                <h5 className="text-[28px] font-[500] sm:text-[36px] mb-[10px] sm:mb-[14px]">
                  Off-line speed
                </h5>
                <div className="text-[16px] font-[300] sm:text-[18px] whitespace-pre-line">
                  Hi-speed as it works locally. No server — no lag
                </div>
              </div>
            </div>
            <div
              data-v-dbbcdee0=""
              className="viewport-element-fade-in viewport-element mb-[44px] sm:mb-[70px] last:mb-0 min-w-[320px] md:mx-[32px] lg:mx-[64px] is-visible"
              style={{ transitionDelay: "0.05s" }}
            >
              {/**/}
              <div className="text-center">
                <div className="mb-[18px] sm:mb-[22px] flex justify-center items-end">
                  <div className="mx-[8px] sm:mx-[10px] min-h-[48px] sm:min-h-[64px]">
                    <img
                      src="/images/home/energy.svg"
                      className="max-w-[64px] sm:max-w-[196px]"
                    />
                  </div>
                </div>
                <h5 className="text-[28px] font-[500] sm:text-[36px] mb-[10px] sm:mb-[14px]">
                  Fast sync
                </h5>
                <div className="text-[16px] font-[300] sm:text-[18px] whitespace-pre-line">
                  Syncs in a peer-to-peer way in local networks
                </div>
              </div>
            </div>
            <div
              data-v-dbbcdee0=""
              className="viewport-element-fade-in viewport-element mb-[44px] sm:mb-[70px] last:mb-0 min-w-[320px] md:mx-[32px] lg:mx-[64px] is-visible"
              style={{ transitionDelay: "0.1s" }}
            >
              {/**/}
              <div className="text-center">
                <div className="mb-[18px] sm:mb-[22px] flex justify-center items-end">
                  <div className="mx-[8px] sm:mx-[10px] min-h-[48px] sm:min-h-[64px]">
                    <img
                      src="/images/home/stores.svg"
                      className="max-w-[73px] sm:max-w-[110px]"
                    />
                  </div>
                </div>
                <h5 className="text-[28px] font-[500] sm:text-[36px] mb-[10px] sm:mb-[14px]">
                  Native on mobile
                </h5>
                <div className="text-[16px] font-[300] sm:text-[18px] whitespace-pre-line">
                  Natural touch and scroll experience, on both iOS and Android
                </div>
              </div>
            </div>
          </div>

          {/* end */}
        </div>
      </section>
      <section className=" bg-black text-white">
        <div className="containers pt-[48px]">
          <div className="border border-b-0 border-gray-600">
            <div className="flex flex-col md2:flex-row gap-[40px] sm:gap-[52px] md2:gap-[60px] items-center justify-center containers py-[64px] sm:py-[96px] md2:py-[106px]">
              <div className="flex md2:w-[50%] w-full justify-center items-center">
                <h2
                  data-v-dbbcdee0=""
                  className="viewport-element-fade-in viewport-element leading-[0.9] text-center md2:text-left whitespace-pre-line is-visible"
                >
                  {/**/}
                  <span className="block text-[40px] font-[300] sm:text-[80px]  md:mb-[4px] text-[#3BD9B3]">
                    create <br /> your own piece
                  </span>
                  <span className="block text-[44px] sm:text-[88px]">
                    {" "}
                    of the web{" "}
                  </span>
                </h2>
              </div>
              <div
                data-v-dbbcdee0=""
                className="viewport-element-fade-in viewport-element is-visible"
              >
                {/**/}
                <img
                  src="images/home/footer.svg"
                  className="w-[258px] sm:w-[412px] md:w-[516px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* start  */}
        <footer className="bg-black text-white">
  <div className="containers pb-[48px]">
    <div className="flex flex-wrap  border-l border-t border-gray-600">
      <Link
        href="https://download.anytype.io/"
        target="_blank"
        rel="nofollow"
        className="group py-[10px] transition-colors border-r border-b border-gray-600  px-offsetDesktop relative flex items-center justify-center text-center w-full sm:w-1/3 min-h-[96px] md:min-h-[176px] text-[22px] font-[500] text-[#3BD9B3] hover:bg-black"
      >
        <div
          className="viewport-element-fade-in viewport-element flex justify-center items-center is-visible"
        >
          {/**/}
          {/**/}Get the app
        </div>
      </Link>
      <button
        type="button"
        className="group py-[10px] transition-colors border-r border-b border-gray-600 text-center px-[20px] relative flex items-center justify-center  w-full sm:w-1/3 min-h-[96px] md:min-h-[176px] text-[22px] font-[500] text-[#3BD9B3] hover:bg-black"
      >
        <div
          data-v-dbbcdee0=""
          className="viewport-element-fade-in viewport-element flex justify-center items-center is-visible"
          style={{ transitionDelay: "0.05s" }}
        >
          {/**/}
          {/**/}Subscribe to updates
        </div>
      </button>
      <Link
        href="https://anytype.typeform.com/contributors?utm_source=anytype.io"
        target="_blank"
        rel="nofollow"
        className="group py-[10px] transition-colors border-r border-b border-gray-600  px-[20px] relative flex items-center justify-center text-center w-full sm:w-1/3 min-h-[96px] md:min-h-[176px] text-[22px] font-[500] text-[#3BD9B3] hover:bg-black-800"
      >
        <div
          data-v-dbbcdee0=""
          className="viewport-element-fade-in viewport-element flex justify-center items-center is-visible"
          style={{ transitionDelay: "0.1s" }}
        >
          {/**/}
          {/**/}Join to contribute
        </div>
      </Link>
    </div>
    <div className="flex flex-wrap mb-[18px] sm:mb-[32px] w-full">
    <a
        href="/faq"
        className=" py-[10px]  border border-t-0  border-gray-600  px-[20px] relative flex items-center justify-center text-center w-1/2 sm:w-[14.28%] text-[18px] font-[300] min-h-[64px] md:min-h-[88px] hover:bg-black"
      >
        <div
          data-v-dbbcdee0=""
          className="flex justify-center items-center">
          {/**/}
          FAQ
        </div>
      </a>
      <a
        href="https://community.anytype.io/"
        target="_blank"
        rel="nofollow"
        className="group py-[10px]  border-r border-b border-gray-600 px-[20px] relative flex items-center justify-center text-center w-1/2 sm:w-[14.28%] text-[18px] font-[300] min-h-[64px] md:min-h-[88px]"
      >
        <div
          data-v-dbbcdee0=""
          className="viewport-element-fade-in viewport-element flex justify-center items-center is-visible"
          style={{ transitionDelay: "0.2s" }}
        >
          {/**/}
          Forum
        </div>
      </a>
      <a
        href="https://blog.anytype.io/"
        target="_blank"
        rel="nofollow"
        className=" py-[10px]  border  border-t-0 border-gray-600  px-[20px] relative flex items-center justify-center text-center w-1/2 sm:w-[14.28%] text-[18px] font-[300] min-h-[64px] md:min-h-[88px]"
      >
        <div
          className=" flex justify-center items-center"
        >
          {/**/}
          Blog
        </div>
      </a>
      <a
        href="https://doc.anytype.io/d/"
        target="_blank"
        rel="nofollow"
        className=" py-[10px]  border-r border-b border-gray-600  px-[20px] relative flex items-center justify-center text-center w-1/2 sm:w-[14.28%] text-[18px] font-[300] min-h-[64px] md:min-h-[88px]"      >
        <div
          data-v-dbbcdee0=""
          className="viewport-element-fade-in viewport-element flex justify-center items-center is-visible"
          style={{ transitionDelay: "0.3s" }}
        >
          {/**/}
          Docs
        </div>
      </a>
      <a
        href="https://t.me/anytype"
        target="_blank"
        rel="nofollow"
        className="py-[10px]  border-r border-b border-l md:border-l-0 border-gray-600  px-[20px] relative flex items-center justify-center text-center w-1/3 sm:w-[14.28%] text-[18px] font-[300] min-h-[64px] md:min-h-[88px]"
      >
        <div
          data-v-dbbcdee0=""
          className="flex justify-center items-center is-visible"
          style={{ transitionDelay: "0.35s" }}
        >
          {/**/}
          {/**/}
          <span
            data-v-6aa3f129=""
            className="nuxt-icon icon icon-telegram text-[20px]"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.518605 8.93108C-0.151788 8.7444 -0.179699 7.80185 0.478468 7.57563L18.8964 1.24534C19.4857 1.0428 20.0802 1.53662 19.9911 2.15472L17.6806 18.1901C17.5972 18.7685 16.8913 19.0038 16.479 18.5905L11.647 13.7466L8.9243 17.798C8.74056 18.0715 8.31471 17.9411 8.31471 17.6114V12.0763L17.4785 3.30748L5.81549 10.4061L0.518605 8.93108Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </a>
      <a
        href="https://github.com/anyproto"
        target="_blank"
        rel="nofollow"
        className="group py-[10px] border-r border-b border-gray-600  px-[20px] relative flex items-center justify-center text-center w-1/3 sm:w-[14.28%] text-[18px] font-[300] min-h-[64px] md:min-h-[88px]"
      >
        <div
          data-v-dbbcdee0=""
          className="flex justify-center items-center"
          style={{ transitionDelay: "0.4s" }}
        >
          {/**/}
          {/**/}
          <span
            data-v-6aa3f129=""
            className="nuxt-icon icon icon-github text-[20px]"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1659_5296)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.99908 0C4.47773 0 0 4.47566 0 9.99705C0 14.4138 2.86504 18.1604 6.83876 19.4823C7.33908 19.5743 7.52141 19.2657 7.52141 19.0005C7.52141 18.7637 7.51282 18.1346 7.5079 17.3006C4.72636 17.9045 4.13948 15.9603 4.13948 15.9603C3.68458 14.8053 3.02895 14.4979 3.02895 14.4979C2.121 13.878 3.0977 13.8903 3.0977 13.8903C4.10142 13.9609 4.62936 14.9207 4.62936 14.9207C5.52135 16.4482 6.97013 16.0069 7.53983 15.751C7.63068 15.1054 7.88913 14.6648 8.17459 14.415C5.95414 14.1628 3.61951 13.3049 3.61951 9.47419C3.61951 8.38304 4.00933 7.49012 4.64901 6.79174C4.54587 6.53889 4.20271 5.52201 4.74723 4.14611C4.74723 4.14611 5.58642 3.87731 7.49685 5.17097C8.2943 4.94882 9.15007 4.83835 10.0003 4.83406C10.8499 4.83835 11.7051 4.94882 12.5038 5.17097C14.413 3.87731 15.2509 4.14611 15.2509 4.14611C15.7967 5.52201 15.4535 6.53889 15.351 6.79174C15.9919 7.49012 16.3787 8.38304 16.3787 9.47419C16.3787 13.3147 14.0403 14.1597 11.8131 14.407C12.1716 14.7157 12.4915 15.3257 12.4915 16.2586C12.4915 17.5946 12.4792 18.6728 12.4792 19.0005C12.4792 19.2681 12.6597 19.5792 13.1668 19.4817C17.1374 18.1567 20 14.4126 20 9.99705C20 4.47566 15.5223 0 9.99908 0Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1659_5296">
                  <rect width={20} height={20} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
      </a>
      <a
        href="https://twitter.com/AnytypeLabs"
        target="_blank"
        rel="nofollow"
        className=" py-[10px]  border-r border-b border-gray-600  px-[20px] relative flex items-center justify-center text-center w-1/3 sm:w-[14.28%] text-[18px] font-[300] min-h-[64px] md:min-h-[88px] "
      >
        <div
          data-v-dbbcdee0=""
          className="viewport-element-fade-in viewport-element flex justify-center items-center is-visible"
          style={{ transitionDelay: "0.45s" }}
        >
          {/**/}
          {/**/}
          <span
            data-v-6aa3f129=""
            className="nuxt-icon icon icon-twitter text-[20px]"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 3.25913C19.2642 3.60885 18.4733 3.84437 17.6433 3.95053C18.4908 3.40723 19.1417 2.54633 19.4475 1.52038C18.655 2.02354 17.7767 2.38931 16.8417 2.58647C16.0942 1.73271 15.0267 1.19922 13.8467 1.19922C11.1975 1.19922 9.25083 3.84526 9.84917 6.59211C6.44 6.40923 3.41667 4.66066 1.3925 2.00302C0.3175 3.9773 0.835 6.56 2.66167 7.86785C1.99 7.84466 1.35667 7.6475 0.804167 7.3183C0.759167 9.35324 2.12167 11.257 4.095 11.6808C3.5175 11.8485 2.885 11.8878 2.24167 11.7557C2.76333 13.5007 4.27833 14.7702 6.075 14.8059C4.35 16.2538 2.17667 16.9006 0 16.6258C1.81583 17.8721 3.97333 18.5992 6.29 18.5992C13.9083 18.5992 18.2125 11.7111 17.9525 5.53316C18.7542 4.91313 19.45 4.13966 20 3.25913Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </a>
    </div>
    <div
      data-v-dbbcdee0=""
      className=" sm:flex sm:items-center sm:justify-end text-[14px] font-[400] px-[16px]"
    >
      {/**/}
      <div className="flex justify-center mb-[36px] sm:mb-0 sm:order-1">
        <Link href="/website_privacy" className="mx-[16px] sm:mr-0 sm:ml-[40px]">
          Privacy Policy
        </Link>
        <Link href="/terms_of_use" className="mx-[16px] sm:mr-0 sm:ml-[40px]">
          Terms and conditions
        </Link>
      </div>
      <div className="flex items-center justify-center sm:justify-start mr-auto text-gray-400">
        {" "}
        Made by Any — a Swiss association{" "}
        <span data-v-6aa3f129="" className="nuxt-icon icon icon-swiss ml-[8px]">
          <svg
            width={15}
            height={14}
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.53125" y="0.5" width={13} height={13} stroke="#808080" />
            <rect x="6.03125" y="3.5" width={2} height={7} fill="#808080" />
            <rect
              x="3.53125"
              y={8}
              width={2}
              height={7}
              transform="rotate(-90 3.53125 8)"
              fill="#808080"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</footer>

      </section>
    </>
  );
}
