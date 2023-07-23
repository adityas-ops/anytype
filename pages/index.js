import Card from "@/components/Card";
import Gallary from "@/components/Gallary";
import Kanban from "@/components/Kanban";
import Table from "@/components/Table";
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
  const [compo,setCompo] =  useState(1)
  return (
    <>
      <section className="w-full mt-[80px] bg-white z-0 relative overflow-hidden bg-gradient-1">
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
                table: (<Table/>),
                kanban: (<Kanban/>),
                gallary: (<Gallary/>),
              }[activeBut]

            }
          </div>
        </div>
      </section>
    </>
  );
}
