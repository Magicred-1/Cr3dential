"use client";

import Image from "next/image";
import LandingBg from "@/components/landing-bg";
import { lexend } from "@/components/utils/const"

export default function Home() {
  return (
    <div className={`overflow-hidden w-full h-screen ${lexend.className}`}>

      <div className="z-0 absolute w-full h-full">
        <LandingBg></LandingBg>
      </div>

      <div className="z-10 w-full absolute top-0 px-[1%] py-[1%] bg-transparent flex flex-row justify-between">

        <Image width="170" height="170" src="/logo_cr3dential_white.svg" alt=""></Image>

        <a className='relative px-[1%] py-[0.4%] cursor-pointer text-center font-light
          transition-all ease-in-out duration-200
          box-border sm:border-[1.5px] border-[0.75px] border-solid border-white rounded-[15px]
        text-white hover:text-black
          xl:text-lg lg:text-md md:text-sm text-xs
          bg-noirmat hover:bg-white'
          href="/login">
            Go to the App
        </a>

      </div>

      <div className="absolute w-full top-[40%] flex flex-col text-center px-[5%]">

        <div className="font-normal xl:text-6xl lg:text-3xl md:text-xl sm:text-lg text-sm pb-[4%]">
          Your gateway to Decentralized Identity <span className="display: block">with XRPL</span>
        </div>

        <div>
          <a className='relative px-[1.5%] py-[0.6%] cursor-pointer text-center font-light
              transition-all ease-in-out duration-200
              box-border sm:border-[1.5px] border-[0.75px] border-solid border-white rounded-[15px]
            text-white hover:text-black
              xl:text-lg lg:text-md md:text-sm text-xs
              bg-noirmat hover:bg-white'
              href="/login">
                Get Started
            </a>
        </div>

      </div>

      <div className="z-10 w-full absolute bottom-0 px-[1%] py-[1%] bg-transparent flex flex-row justify-between
      text-white font-thin
      xl:text-md lg:text-sm text-xs">
        <div>@Cr3dential</div>
        <div>Powered by XRPL</div>
        <div>WebApp</div>
      </div>

    </div>
  );
}
