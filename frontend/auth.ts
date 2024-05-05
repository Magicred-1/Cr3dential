import NextAuth from "next-auth"

import LinkedIn from "next-auth/providers/linkedin"


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [LinkedIn({

        authorization: {
            url: "https://www.linkedin.com/oauth/v2/authorization",
            params: { scope: "openid profile email" },
        },
        token: {
            url: "https://www.linkedin.com/oauth/v2/accessToken",
        },
        userinfo: {
            url: "https://api.linkedin.com/v2/userinfo",
        },
        checks: ['none'],
        clientId: process.env.AUTH_LINKEDIN_ID,
        clientSecret: process.env.AUTH_LINKEDIN_SECRET,
        issuer: 'https://www.linkedin.com/oauth',
        jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
        async profile(profile) {
            return {
                id: profile.sub,
                name: profile.name,
                firstname: profile.given_name,
                lastname: profile.family_name,
                email: profile.email
            }
        },
    })],
    debug: true,
    
})