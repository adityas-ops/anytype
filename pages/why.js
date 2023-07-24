import Link from "next/link";
import React from "react";

function why() {
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
      <section className=" bg-white text-black">
        <div className=" containers">
          <div className="relative md2:grid md2:grid-cols-2 z-10 border border-b-0  border-gray-600">
            {/* first div start */}
            <div
              className="container-inner relative border-gray-600 border-b md2:border-b-0 md2:border-r text-center"
            >
              {/**/}
              <h3

                className=" pt-[70px] pb-[70px] font-[400] leading-[1] md:leading-[0.864] font-Inter sm:py-[112px] text-[44px] sm:text-[88px] whitespace-pre-line w-full"
              >
                {/**/}Why we are building Anytype
              </h3>
            </div>
            {/* first div end */}
            {/* second div start */}
            <div
  className="py-[72px] sm:py-[118px] px-5  sm:px-[80px]"
>
  {/**/}
  <h2 className="text-[28px] hidden md3:block font-[500] mb-[32px] leading-[1.1] text-center whitespace-pre-line">
    We are building an alternative for <br/> those<br/>  who value freedom and trust — for
    <br/>
    ourselves.
  </h2>
  <h2 className="text-[28px] block md3:hidden font-[500] mb-[32px] leading-[1.1] text-center whitespace-pre-line">
    We are building an alternative for  those  who value freedom and trust — for
   
    ourselves.
  </h2>
  <div className="html-block mb-[30px] text-[18px] font-Inter font-[300] leading-[1.4]">
    <p className="mb-2">
      {" "}
      We believe in fundamental digital freedoms, which we consider essential
      for the health of any well-governed society. These freedoms include: the
      privacy of thought; the freedom to connect with those we trust; the
      freedom to create and manage communities of our choice; and, the freedom
      to participate in the governance of our digital creations.{" "}
    </p>
    <p className="mb-2">
      {" "}
      We predict that these digital freedoms hold the same importance for the
      digital world (the world of bits) as fundamental human rights do for the
      physical world (the world of atoms). In the real world, human rights—and
      the governance surrounding them—represent the most powerful innovation to
      support cooperation, forming the foundation upon which any well-governed
      society of today functions. Our bet is that fundamental digital freedoms
      play the same role in the world of bits.{" "}
    </p>
    <p className="mb-2">
      {" "}
      Unfortunately, the current web and much of the software we use do not
      respect these digital freedoms. The architecture of the current web is
      built on the application developers being the keepers of keys - they
      control the keys to accounts of users. As they hold these keys, they
      determine who can access an account, who cannot, and how information is
      shared and distributed. At present, our keys—and by extension, our
      freedoms—are governed by corporations - their management, and their
      shareholders. We believe corporations are ill-suited to govern such
      matters.&nbsp;{" "}
    </p>
    <p className="mb-2">
      {" "}
      With so much of our lives lived online, we are driven to construct an
      alternative that respects these fundamental digital freedoms.&nbsp;{" "}
    </p>
    <p className="mb-2">
      {" "}
      The decentralized architecture with all its protocols and code is not the
      new web. The interface is needed to spread this alternative. The current
      web was built not by software companies that provided the tools, but by
      millions of creators and communities that filled these platforms with
      meaning. That&apos;s why we envelope the protocols that support digital
      freedoms into no-code elegant tools that anyone can use. We want to enable
      all those who like us envision the world of tomorrow to build it
      together.&nbsp;{" "}
    </p>
  </div>
  <div className="text-[18px] font-[600]  mb-[6px]"> Go deeper: </div>
  <ul className=" list-disc font-Inter">
    <li>
      <Link href="/why/mission" className="underline">
        Our mission
      </Link>
    </li>
    <li>
      <Link href="/why/manifesto" className="underline">
        Our manifesto
      </Link>
    </li>
  </ul>
</div>

            {/* second div end  */}
          </div>
        </div>
        <footer className="bg-white text-black">
  <div className="containers pb-[48px]">
    <div className="flex flex-wrap  border-l border-t border-gray-600">
      <Link
        href="https://download.anytype.io/"
        target="_blank"
        rel="nofollow"
        className="group py-[10px] transition-colors border-r border-b border-gray-600  px-[20px] relative flex items-center justify-center text-center w-full sm:w-1/3 min-h-[96px] md:min-h-[176px] text-[22px] font-[500]"
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
        className="group py-[10px] transition-colors border-r border-b border-gray-600 text-center px-[20px] relative flex items-center justify-center  w-full sm:w-1/3 min-h-[96px] md:min-h-[176px] text-[22px] font-[500] "
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
        className="group py-[10px] transition-colors border-r border-b border-gray-600  px-[20px] relative flex items-center justify-center text-center w-full sm:w-1/3 min-h-[96px] md:min-h-[176px] text-[22px] font-[500] "
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
        className="py-[10px]  border-r border-l md:border-l-0 border-b border-gray-600  px-[20px] relative flex items-center justify-center text-center w-1/3 sm:w-[14.28%] text-[18px] font-[300] min-h-[64px] md:min-h-[88px]"
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
                fill="black"
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
                  fill="black"
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
                fill="black"
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

export default why;
