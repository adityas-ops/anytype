import Card from "@/components/Card";

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
      <section className=" bg-white text-black overflow-hidden py-[10px] sm:py-[16px]">
        <div className="containers relative">
         {/* gradient start */}
         <div className=" absolute  right-[-620px] z-[1] top-[500px] bg-gradient-2 h-[512px] w-[1024px]"/>
           {/* gradient end */}
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
                Protect your thoughts & <br/> data with end-to-end <br/>encryption
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
          <div className="flex flex-col z-[100]  sm:flex-row border-[1px] border-t-0 border-gray-700 ">
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
                Nobody can stop you<br/> from accessing your<br/> account
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
                Pure transparency — <br/> trust our code, not our<br/> words
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
        </div>
      </section>
    </>
  );
}
