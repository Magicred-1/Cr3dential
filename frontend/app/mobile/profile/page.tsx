import React from 'react'
import Image from 'next/image'
import NavBarMobile from '@/components/navbar-desk'
import { lexend } from "@/components/utils/const"

export default function profile() {
  return (
    <div className={`overflow-hidden w-full h-screen background-ui ${lexend.className}`}>

      <div className='-mt-12 flex flex-col w-full h-full justify-center items-center'>

        <Image alt="" width="150" height="150" src="/logo_cr3dential_white.svg"
        className='py-5'></Image>

        <div className='w-[80%] h-[60%] bg-white bg-opacity-50 rounded-xl flex flex-col justify-center items-center gap-5'>

          <Image alt="" width="40" height="40" src="/icon-xrpl.svg"></Image>

          <div className='text-2xl'>- Your DID -</div>
          
          <Image alt=""  width="120" height="120" src="/pp-user.png"></Image>

          <div className='flex flex-row gap-2'>
            <div className='text-sm'>did:xrpl:1:0330E7...F7FD020</div>
            <Image alt="" width="23" height="23" src="/icon-copy.svg" className='-mt-2'></Image>
          </div>

          <a className='w-[70%] bg-sky-900 opacity-90 text-center py-2 rounded-lg shadow-xl
          flex flex-row justify-center items-center gap-2'>
            <div>Your QR Code</div>
            <Image alt="" width="20" height="20" src="/icon-qr.svg"></Image>
          </a>

          <a className='w-[70%] bg-sky-900 opacity-90 text-center py-2 rounded-lg shadow-xl
          flex flex-row justify-center items-center gap-2'>
            <div>Share</div>
            <Image alt="" width="20" height="20" src="/icon-share.svg"></Image>
          </a>
          
        </div>

        <div className='font-extralight text-xs pt-5'>Powered by XRPL</div>

      </div>

      <NavBarMobile></NavBarMobile>
      
    </div>
  )
}
