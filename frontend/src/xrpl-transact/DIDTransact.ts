import { uploadToIPFS } from "./pinata";

type Profile = {
    type: string;
    name: string;
    sector?: string;
    description?: string;
    website?: string;
    twitter?: string;
    discord?: string;
    profileImage?: string;
};

type DIDVerificationMethod =  {
    id: string,
    type: string,
    controller: string,
    publicKeyHex: string
}

type DIDService = {
    id: string,
    type: string,
    serviceEndpoint: string
}

type DIDDocument = {
    "@context": string,
    id: string,
    controller: string,
    verificationMethod: DIDVerificationMethod[],
    service?: DIDService[]
}

const profile: Profile = {
    type: "Issuer Profile",
    name: "mydid",
    sector: "Blockchain",
    description: "myDid offers a customizable wallet solution allowing your users to share their Identity and easily exchange Community Badges.",
    website: "https://mydid.com/",
    twitter: "https://twitter.com/myDid_En",
    discord: "https://discord.mydid.com/",
};

export const createUserProfile = async (profile: Profile, adress: string, publicKey: string): Promise<string> => {
    
    const profileHash = await uploadToIPFS(JSON.stringify(profile))
    const ipfsPrefiix = "https://gateway.pinata.cloud/ipfs/"

    const did = `did:xrpl:1:${adress}`;

    const didDocument: DIDDocument = {
        "@context": "https://www.w3.org/ns/did/v1",
        "id": did,
        "controller": did,
        "verificationMethod": [{
          "id": `${did}#keys-1`,
          "type": "EcdsaSecp256k1RecoveryMethod2020",
          "controller": did,
          "publicKeyHex": publicKey
        }],
        "service": [{
          "id": `${did}#profile`,
          "type": "Public Profile",
          "serviceEndpoint": `${ipfsPrefiix}${profileHash}`
        }]
      };

    const didHash = await uploadToIPFS(JSON.stringify(didDocument))

    return didHash
}



