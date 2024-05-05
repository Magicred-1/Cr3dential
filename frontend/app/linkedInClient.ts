

export const getMyCertifications = async () => {
    return( await fetch('https://api.linkedin.com/v2/me?projection=(id,firstName,lastName)', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + window.localStorage.getItem('linkedInToken')
        },
        mode: 'no-cors'
    })).json();
}