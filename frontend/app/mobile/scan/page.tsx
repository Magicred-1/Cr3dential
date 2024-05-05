"use client";

import React from 'react'
import Image from 'next/image'
import NavBarMobile from '@/components/navbar-desk'
import QRScanner from '@/components/qrscan'
import { lexend } from "@/components/utils/const"

export default function Scan() {
  return (
    <div className='overflow-hidden w-full h-screen background-ui'>

      <div className='-mt-12 flex flex-col w-full h-full justify-center items-center'>

        <Image alt="" width="150" height="150" src="/logo_cr3dential_white.svg"
        className='py-5'></Image>

        <div className='w-[80%] h-[60%] bg-white bg-opacity-50 rounded-xl flex flex-col items-center gap-10'>

            <div className={`mt-10 text-white ${lexend.className} text-xl`}>QR Scanner</div>
          
            <div className='w-[60%] h-[30%]'>
                <QRScanner></QRScanner>
            </div>
          
        </div>

        <div className='font-extralight text-xs pt-5'>Powered by XRPL</div>

      </div>

      <NavBarMobile></NavBarMobile>
      
    </div>
  )
}
