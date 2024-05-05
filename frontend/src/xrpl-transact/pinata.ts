"use server"

export const uploadToIPFS = async (dataJson: any): Promise<string> => {
    const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
    const headers = {
        authorization: `Bearer ${process.env.PINATA_JWT}`,
    };

    const blob = new Blob([dataJson], { type: "text/plain" });
    const data = new FormData();
    data.append("file", blob);

    const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: data,
    });

    const json = await response.json();

    return json.IpfsHash;
}