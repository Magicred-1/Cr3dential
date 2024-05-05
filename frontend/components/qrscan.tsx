'use client';

import { useState } from 'react';
// import { Scanner } from '@yudiel/react-qr-scanner';
import dynamic from 'next/dynamic';

const DynamicQrScanner = dynamic(() => import('@yudiel/react-qr-scanner').then(mod => mod.Scanner), {
    ssr: false
});


const QRScanner = () => {
    const [scanResult, setScanResult] = useState('No result');
    const [scanError, setScanError] = useState('');
    const [createAttestationButton, setCreateAttestationButton] = useState(false);

    //TODO: Use the wagmi library to create an attestation for the scanned address

    const handleError = (err: any) => {
        setScanError(err);
    };

    const handleScan = (result: any) => {
        // if the result contains "did:xrp:1:" we remove it and keep the rest
        if (result && result.includes('did:xrp:1:')) {
            setCreateAttestationButton(true);
        }

        // check if the result is a valid ethereum address
        if (result && result.length === 42) {
            setCreateAttestationButton(true);
        }

        if (result && result.length !== 42) {
            setCreateAttestationButton(false);
        }

        if (result && result.length === 0) {
            setCreateAttestationButton(false);
        }
        
        setScanResult(result);
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <DynamicQrScanner
                onResult={handleScan}
                onError={handleError}
            />
            <p>{scanError}</p>
            {
                createAttestationButton ? <button
                    onClick={() => {
                        console.log('Adding contact with address:', scanResult);
                        // TODO: Trigger the attestation creation logic here on smart contract
                    }
                }
                >Add Contact</button> : null
            }
        </div>
    );
};

export default QRScanner;