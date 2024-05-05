import login from "@/app/login/page";
import { linkedInAccessToken } from "./linkedInServer";
import { useState } from "react";


type LinkedCertification = {
    id: string;
    name: string;
    authority: string;
    issueDate: string;
    expirationDate: string;
    credentialUrl: string;
}

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

const loginToLinkedIn = (redirect_uri: string) => {
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
    const hasToken = accessToken;

    const certifications: LinkedCertification[] = [
        {
            id: "1",
            name: "Certification in Web Development",
            authority: "LinkedIn Learning",
            issueDate: "2022-01-15",
            expirationDate: "2025-01-15",
            credentialUrl: "https://www.linkedin.com/learning/certification/web-development"
        },
        {
            id: "2",
            name: "Certification in Data Science",
            authority: "Coursera",
            issueDate: "2022-02-20",
            expirationDate: "2025-02-20",
            credentialUrl: "https://www.coursera.org/professional-certificates/data-science"
        },
        {
            id: "3",
            name: "Certification in Agile Project Management",
            authority: "Project Management Institute",
            issueDate: "2022-03-10",
            expirationDate: "2025-03-10",
            credentialUrl: "https://www.pmi.org/certifications/agile-project-management"
        }
    ];

    return {
        isLogged: hasToken,
        login: loginToLinkedIn,
        profile: {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            pictureUrl: '',
            accessToken: '',
            expiresAt: 0,
        },
        certifications: certifications
    }
}