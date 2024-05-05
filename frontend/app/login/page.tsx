"use client";

import React from 'react'
import Image from 'next/image'
import XRPLButton from '@/src/XRPLButton'

export default function login() {
  return (
    <div className='overflow-hidden w-full h-screen background-ui flex justify-center items-center'>

      <div className='w-[40%] h-[50%] bg-white bg-opacity-50 rounded-xl flex flex-col justify-center items-center'>
        
        <Image alt="" width="150" height="150" src="/logo_cr3dential.svg" ></Image>

        <XRPLButton isAdmin={false} />
      </div>
      
    </div>
  )
}
