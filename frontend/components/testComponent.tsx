import { getTests } from "@/app/dbFetchExample";

function TestComp() {
      const randomString = () => {
        const random = Math.random().toString(36).substring(7);
        return random;
      }
    
      const connectWithLinkedIn = () => {
        const url = "https://www.linkedin.com/oauth/v2/authorization"
    
        const urlParams = new URLSearchParams({
          response_type: "code",
          client_id: process.env.AUTH_LINKEDIN_ID || "78zherg5uo7ead",
          redirect_uri: "http://localhost:3000/linkedIn",
          scope: "r_basicprofile",
          state: randomString()
        })
    
        const buildedUrl = `${url}?${urlParams.toString()}`
    
        window.location.href = buildedUrl
    
    
      }
    
      const handleClick = () => {
        
        getTests().then((res) => {
          console.log(res);
        })
    
      };
    
      const testLinkedIn = () => {
    
        connectWithLinkedIn()
        // console.log(`${window.location.origin}`)
        // linkedInLogin()
      }

    return ( 
        <div>
            <h1>Test Component</h1>
        </div>
     );
}

export default TestComp;