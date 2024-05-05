"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import NavBarDesk from '@/components/navbar-desk';
import { lexend } from '@/components/utils/const';
import ProfileAddressQRCode from '@/components/qrcode';

export default function Profile() {
  const [showQRDialog, setShowQRDialog] = useState(false);

  const showQRCodeDialog = () => {
    // Show dialog
    setShowQRDialog(true);
  };

  const hideQRCodeDialog = () => {
    // Hide dialog
    setShowQRDialog(false);
  };

  return (
    <div className={`overflow-hidden w-full h-screen background-ui ${lexend.className}`}>
      <div className="-mt-12 flex flex-col w-full h-full justify-center items-center">
        <Image alt="" width="150" height="150" src="/logo_cr3dential_white.svg" className="py-5" />

        <div className="w-[50%] h-[60%] bg-white bg-opacity-50 rounded-xl flex flex-col justify-center items-center gap-4">
          <Image alt="" width="40" height="40" src="/icon-xrpl.svg" className="pb-5" />

          <div className="text-2xl font-semibold">- Your DID -</div>

          <Image alt="" width="120" height="120" src="/pp-user.png" />

          <div className="flex flex-row gap-2">
            <div className="text-lg">did:xrpl:1:0330E7FC9D56BB2...2654A313222F7FD020</div>
            <Image alt="copy" width="23" height="23" src="/icon-copy.svg" className="-mt-2 cursor-pointer" />
          </div>

          <div className="flex flex-row gap-[5%] w-[90%] justify-center items-center">
            <button
              className="w-[25%] bg-sky-900 opacity-90 text-center py-3 rounded-lg shadow-xl
          flex flex-row justify-center items-center gap-2
          cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
              onClick={showQRCodeDialog}
            >
              Your QR Code
              <Image alt="" width="20" height="20" src="/icon-qr.svg" />
            </button>

            <a className="w-[25%] bg-sky-900 opacity-90 text-center py-3 rounded-lg shadow-xl
          flex flex-row justify-center items-center gap-2
          cursor-pointer hover:scale-110 transition-all ease-in-out duration-300">
              <div>Share</div>
              <Image alt="" width="20" height="20" src="/icon-share.svg" />
            </a>
          </div>
        </div>

        <div className="font-extralight text-xs pt-5">Powered by XRPL</div>
      </div>

      <NavBarDesk />

      {showQRDialog && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
              <ProfileAddressQRCode DIDAddress='did:xrpl:1:0330E7FC9D56BB25D6893BA3F317AE5BCF33B3291BD63DB32654A313222F7FD020' />
            <button className='cursor-pointer' onClick={hideQRCodeDialog}>Close</button> {/* Close button */}
          </div>
        </div>
      )}
    </div>
  );
}
