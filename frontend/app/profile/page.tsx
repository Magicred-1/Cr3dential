import React from 'react'
import Image from 'next/image'
import NavBarDesk from '@/components/navbar-desk'
import { lexend } from '@/components/utils/const'


export default function profile() {
  return (
    <div className={`overflow-hidden w-full h-screen background-ui ${lexend.className}`}>

      <div className='-mt-12 flex flex-col w-full h-full justify-center items-center'>

        <Image alt="" width="150" height="150" src="/logo_cr3dential_white.svg"
        className='py-5'></Image>

        <div className='w-[50%] h-[60%] bg-white bg-opacity-50 rounded-xl flex flex-col justify-center items-center gap-4'>
          
        <Image alt="" width="40" height="40" src="/icon-xrpl.svg" className='pb-5'></Image>

        <div className='text-2xl font-semibold'>- Your DID -</div>

        <Image alt=""  width="120" height="120" src="/pp-user.png"></Image>

        <div className='flex flex-row gap-2'>
          <div className='text-lg'>did:xrpl:1:0330E7FC9D56BB2...2654A313222F7FD020</div>
          <Image alt="copy" width="23" height="23" src="/icon-copy.svg" className='-mt-2 cursor-pointer'></Image>
        </div>

        <div className='flex flex-row gap-[5%] w-[90%] justify-center items-center'>

          <a className='w-[25%] bg-sky-900 opacity-90 text-center py-3 rounded-lg shadow-xl
          flex flex-row justify-center items-center gap-2
          cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'>
            <div>Your QR Code</div>
            <Image alt="" width="20" height="20" src="/icon-qr.svg"></Image>
          </a>

          <a className='w-[25%] bg-sky-900 opacity-90 text-center py-3 rounded-lg shadow-xl
          flex flex-row justify-center items-center gap-2
          cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'>
            <div>Share</div>
            <Image alt="" width="20" height="20" src="/icon-share.svg"></Image>
          </a>

        </div>



        </div>

        <div className='font-extralight text-xs pt-5'>Powered by XRPL</div>

      </div>

      <NavBarDesk></NavBarDesk>
      
    </div>
  )
}
