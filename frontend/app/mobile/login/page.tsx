"use client";

import React from 'react'
import Image from 'next/image'
import NavBar from '@/components/navbar-desk'
import XRPLButton from '@/src/XRPLButton'

export default function login() {
  return (
    <div className='overflow-hidden w-full h-screen background-ui'>

      <div className='-mt-12 flex flex-col w-full h-full justify-center items-center'>

        <Image alt="" width="150" height="150" src="/logo_cr3dential_white.svg"
        className='py-5'></Image>

        <div className='w-[80%] h-[60%] bg-white bg-opacity-50 rounded-xl flex flex-col justify-center items-center'>
          <XRPLButton />
        </div>

      </div>

      <NavBar></NavBar>
      
    </div>
  )
}
