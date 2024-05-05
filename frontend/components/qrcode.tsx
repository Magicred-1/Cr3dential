"use client";
import {QRCodeSVG} from 'qrcode.react';

export const ProfileAddressQRCode = ({ DIDAddress }: { DIDAddress: string }) => {

    if (!DIDAddress) {
        return null;
    }

    if (!DIDAddress.startsWith("did:xrp:1:")) {
        return null;
    }

    return (
        <>
            <QRCodeSVG
                value={"https://picturesofpeoplescanningqrcodes.tumblr.com/"}
                size={128}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"L"}
                includeMargin={false}
                imageSettings={{
                    src: "https://static.zpao.com/favicon.png",
                    x: undefined,
                    y: undefined,
                    height: 24,
                    width: 24,
                    excavate: true,
                }}
                />
        </>
    );
};

export default ProfileAddressQRCode;