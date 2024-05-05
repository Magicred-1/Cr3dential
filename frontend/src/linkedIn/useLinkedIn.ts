import login from "@/app/login/page";
import { linkedInAccessToken } from "./linkedInServer";
import { useState } from "react";




export const getMyCertifications = async () => {
    return( await fetch('https://api.linkedin.com/v2/me?projection=(id,firstName,lastName)', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + window.localStorage.getItem('linkedInToken')
        },
        mode: 'no-cors'
    })).json();
}

const randomString = () => {
    const random = Math.random().toString(36).substring(7);
    return random;
}

export const useLinkedIn = () => {
    
    const [accessToken, setAccessToken] = useState(window.localStorage.getItem('linkedInToken') || '');

    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
        linkedInAccessToken(code)
        .then((res) => {
            window.history.replaceState({}, '', window.location.pathname);
            setAccessToken(res.access_token);
        })
    }
    const hasToken = accessToken !== null;

    return {
        isLogged: hasToken,
        login: (redirect_uri: string) => {
            const authUrl = 'https://www.linkedin.com/oauth/v2/authorization'
            const searchParams = new URLSearchParams({
                response_type: 'code',
                client_id: process.env.AUTH_LINKEDIN_ID || '78zherg5uo7ead',
                redirect_uri: redirect_uri,
                scope: 'r_basicprofile',
                state: randomString()
            })

            const fullUrl = `${authUrl}?${searchParams.toString()}`

            window.location.href = fullUrl
        },
        profile: {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            pictureUrl: '',
            accessToken: '',
            expiresAt: 0,
        }
    }
}