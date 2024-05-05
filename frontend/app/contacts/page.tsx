"use client";

import React from 'react'
import Image from 'next/image'
import NavBarDesk from '@/components/navbar-desk'
import { lexend } from '@/components/utils/const'
import { useRouter } from 'next/navigation'

export default function contacts() {
  // const router = useRouter();
  return (
    <div className={`overflow-hidden w-full h-screen background-ui ${lexend.className}`}>

      <div className='-mt-12 flex flex-col w-full h-full justify-center items-center'>

        <Image
        alt="" width="150" height="150" src="/logo_cr3dential_white.svg"
        className='py-5'></Image>

        <div className='w-[80%] h-[70%] bg-white bg-opacity-50 rounded-xl flex flex-col justify-center items-center'>
          
          <div className='w-full'>
            <div className='text-4xl -mt-[2%] ml-[2%]'>• Contacts</div>
          </div>

          <div className='text-2xl font-normal'>- Individuals -</div>

          <div className='w-full flex flex-row justify-center gap-[5%] py-5 font-medium'>

            <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
            alt="" width="50" height="50" src="/icon-add-more.svg"></Image>

            <div className='flex flex-col gap-3 items-center'>
              <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
              alt=""  width="120" height="120" src="/pp-user1.png"></Image>
              Arnaud
            </div>

            <div className='flex flex-col gap-3 items-center'>
              <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
              alt=""  width="120" height="120" src="/pp-user2.png"></Image>
              Yue
            </div>

            <div className='flex flex-col gap-3 items-center'>
              <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
              alt=""  width="120" height="120" src="/pp-user3.png"></Image>
              Djason
            </div>

            <div className='flex flex-col gap-3 items-center'>
              <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
              alt=""  width="120" height="120" src="/pp-user4.png"></Image>
              Adam
            </div>

            <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
            alt="" width="47" height="47" src="/icon-view-more.svg"></Image>

          </div>


          <div className='text-2xl pt-5 font-normal'>- Organizations -</div>

          <div className='w-full flex flex-row justify-center gap-[5%] py-5 font-medium'>

            <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
            alt="" width="50" height="50" src="/icon-add-more.svg"></Image>

            <div className='flex flex-col gap-3 items-center'>
              <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
              alt=""  width="120" height="120" src="/pp-orga1.png"></Image>
              XRLP
            </div>

            <div className='flex flex-col gap-3 items-center'>
              <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
              alt=""  width="120" height="120" src="/pp-orga2.png"></Image>
              École 42
            </div>

            <div className='flex flex-col gap-3 items-center'>
              <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
              alt=""  width="120" height="120" src="/pp-orga3.png"></Image>
              ETS Global
            </div>

            <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
            alt="" width="47" height="47" src="/icon-view-more.svg"></Image>

          </div>

        </div>

        <div className='font-extralight text-xs pt-5'>Powered by XRPL</div>

      </div>

      <NavBarDesk></NavBarDesk>
      
    </div>
  )
}
