'use server'

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
