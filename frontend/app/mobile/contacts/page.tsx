"use client";

import React from 'react'
import Image from 'next/image'
import NavBarMobile from '@/components/navbar-mobile'
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
    <div className='text-xl pb-5 ml-[4%]'>• Contacts</div>
  </div>

  <div className='text-lg font-normal'>- Individuals -</div>

  <div className='w-full flex flex-row justify-center gap-2 py-3 px-3 font-medium'>

    <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
    alt="" width="32" height="32" src="/icon-add-more.svg"></Image>

    <div className='grid grid-cols-2 gap-5'>

      <div className='w-full relative'>

        <div className='flex flex-col gap-1 items-center text-sm pb-2'>
          <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
          alt=""  width="120" height="120" src="/pp-user1.png"></Image>
          Arnaud
        </div>

        <div className='flex flex-col gap-1 items-center text-sm pb-2'>
          <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
          alt=""  width="120" height="120" src="/pp-user2.png"></Image>
          Yue
        </div>

      </div>

    
    <div className='w-full relative'>
      
      <div className='flex flex-col gap-1 items-center text-sm pb-2'>
        <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
        alt=""  width="120" height="120" src="/pp-user3.png"></Image>
        Djason
      </div>

      <div className='flex flex-col gap-1 items-center text-sm pb-2'>
        <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
        alt=""  width="120" height="120" src="/pp-user4.png"></Image>
        Adam
      </div>
    </div>
    


    </div>

    <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
    alt="" width="30" height="30" src="/icon-view-more.svg"></Image>

  </div>


  <div className='text-lg pt-5 font-normal'>- Organizations -</div>

  <div className='w-full flex flex-row justify-center gap-[5%] py-3 font-medium px-3'>

    <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
    alt="" width="32" height="32" src="/icon-add-more.svg"></Image>

    <div className='flex flex-col gap-1 items-center text-sm pb-2'>
      <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
      alt=""  width="120" height="120" src="/pp-orga1.png"></Image>
      XRLP
    </div>

    <div className='flex flex-col gap-1 items-center text-sm pb-2'>
      <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
      alt=""  width="120" height="120" src="/pp-orga2.png"></Image>
      École 42
    </div>

    <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
    alt="" width="30" height="30" src="/icon-view-more.svg"></Image>

  </div>

</div>

<div className='font-extralight text-xs pt-5'>Powered by XRPL</div>

</div>

<NavBarMobile></NavBarMobile>
      
    </div>
  )
}
