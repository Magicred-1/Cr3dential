"use client";

import React from 'react'
import Image from 'next/image'
import NavBarDesk from '@/components/navbar-desk'
import QRScanner from '@/components/qrscan'
import { lexend } from "@/components/utils/const"

export default function Scan() {
  return (
    <div className='overflow-hidden w-full h-screen background-ui'>

      <div className='-mt-12 flex flex-col w-full h-full justify-center items-center'>

        <Image alt="" width="150" height="150" src="/logo_cr3dential_white.svg"
        className='py-5'></Image>

        <div className='w-[80%] h-[60%] bg-white bg-opacity-50 rounded-xl flex flex-col justify-center items-center'>
          
          <div className='w-full h-full flex flex-row justify-center items-center gap-[12%]'>

            <div className={`h-[70%] w-[40%] text-white ${lexend.className} text-xl text-justify flex flex-col`}>

              <span className='text-4xl'>QR Scanner</span>
              <br/>
              Here, you can scan any QR Code related to a contact, a credential or a completed challenge.

              <div className='w-full my-10 h-[80%] box-border border-[3px] border-solid border-white rounded-[15px]'>
              </div>
            </div>

            <div className='w-[30%] h-auto rounded-[100px]'>
              {/* <QRScanner></QRScanner> */}
            </div>

          </div>
          
        </div>

        <div className='font-extralight text-xs pt-5'>Powered by XRPL</div>

      </div>

      <NavBarDesk></NavBarDesk>
      
    </div>
  )
}
