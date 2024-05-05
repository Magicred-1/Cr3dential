import React from 'react'
import Image from 'next/image'
import NavBarDesk from '@/components/navbar-desk'
import { lexend } from '@/components/utils/const'

export default function credentials() {
  return (
    <div className={`overflow-hidden w-full h-screen background-ui ${lexend.className}`}>

      <div className='-mt-12 flex flex-col w-full h-full justify-center items-center text-sm'>

        <Image alt="" width="150" height="150" src="/logo_cr3dential_white.svg"
        className='py-5'></Image>

        <div className='w-[80%] h-[60%] bg-white bg-opacity-50 rounded-xl 
        flex flex-col gap-1 p-2'>

          <div className='flex flex-row items-center gap-3 justify-center'>

            <div className='flex flex-col gap-3 items-center'>
              <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
              alt=""  width="40" height="40" src="/pp-orga1.png"></Image>
              XRLP
            </div>

            <div className='h-[20%] w-[60%] -mt-[5.5%] bg-sky-900 opacity-90 text-center p-3 rounded-lg shadow-xl'>
              Yue tu t`y conanais mieux que moi jpense
            </div>

          </div>

          <div className='flex flex-row items-center gap-3 justify-center'>

          <div className='flex flex-col gap-3 items-center'>
            <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
            alt=""  width="40" height="40" src="/pp-orga2.png"></Image>
            École 42
          </div>

          <div className='h-[20%] w-[60%] -mt-[5.5%] bg-sky-900 opacity-90 text-center p-3 rounded-lg shadow-xl'>
            Challenges & Achievements
          </div>

          </div>

          <div className='flex flex-row items-center gap-3 justify-center'>

          <div className='flex flex-col gap-3 items-center'>
            <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
            alt=""  width="40" height="40" src="/pp-orga3.png"></Image>
            ETS Global
          </div>

          <div className='h-[20%] w-[60%] -mt-[5.5%] bg-sky-900 opacity-90 text-center p-3 rounded-lg shadow-xl'>
            TOEIC Certificate
          </div>

          </div>

          <div className='flex flex-row items-center gap-3 justify-center'>

          <div className='flex flex-col gap-3 items-center'>
            <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
            alt=""  width="40" height="40" src="/pp-orga4.png"></Image>
            Moodle
          </div>

          <div className='h-[20%] w-[60%] -mt-[5.5%] bg-sky-900 opacity-90 text-center p-3 rounded-lg shadow-xl'>
            Certificates
          </div>

          </div>

          <div className='flex flex-row items-center gap-3 justify-center'>

          <div className='flex flex-col gap-3 items-center'>
            <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
            alt=""  width="40" height="40" src="/pp-orga5.png"></Image>
            TSP
          </div>

          <div className='h-[20%] w-[60%] -mt-[5.5%] bg-sky-900 opacity-90 text-center p-3 rounded-lg shadow-xl'>
            Attestations & Diploma
          </div>

          </div>

          <div className='flex flex-row items-center gap-3 justify-center'>

          <div className='flex flex-col gap-3 items-center'>
            <Image className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
            alt=""  width="40" height="40" src="/pp-orga6.png"></Image>
            Google
          </div>

          <div className='h-[20%] w-[60%] -mt-[5.5%] bg-sky-900 opacity-90 text-center p-3 rounded-lg shadow-xl'>
            Certificates
          </div>

          </div>



          
        </div>

        <div className='font-extralight text-xs pt-5'>Powered by XRPL</div>

      </div>

      <NavBarDesk></NavBarDesk>
      
    </div>
  )
}
