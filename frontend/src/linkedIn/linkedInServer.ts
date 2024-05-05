'use server'

type LinkedCertification = {
    id: string;
    name: string;
    authority: string;
    issueDate: string;
    expirationDate: string;
    credentialUrl: string;
    pictureUrl?: string;
}

export const linkedInAccessToken = async (code: string) => {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', 'http://localhost:3000/linkedIn');
    params.append('client_id', process.env.AUTH_LINKEDIN_ID || '');
    params.append('client_secret', process.env.AUTH_LINKEDIN_SECRET || '');

    const res = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
        method: 'POST',
        body: params.toString(),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    console.log("🚀 ~ linkedInAccessToken ~ res:", res)
    
    return res.json();
}

const certifications: LinkedCertification[] = [
    {
        id: "1",
        name: "Certification in Web Development",
        authority: "LinkedIn Learning",
        issueDate: "2022-01-15",
        expirationDate: "2025-01-15",
        credentialUrl: "https://www.linkedin.com/learning/certification/web-development",
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

export const getMyCertifications = async () => {
    setTimeout(() => {
        return certifications;
    }, 700)
}