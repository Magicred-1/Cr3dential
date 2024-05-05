"use client"

import { useEffect, useMemo, useState } from "react";
import { linkedInAccessToken } from "../linkedInApi";
import { getMyCertifications } from "../linkedInClient";

export default function LinkedInPage() {
  // return <LinkedInCallback />;

  // const [response, setResponse] = useState({});


  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      window.history.replaceState({}, document.title, window.location.pathname);
     linkedInAccessToken(code)
     .then((res) => {
       console.log("🚀 ~ .then ~ linkedInToken:", res)
       if (res.access_token)
        window.localStorage.setItem('linkedInToken', res.access_token);
        getMyCertifications().then((res) => {
          console.log("🚀 ~ getMyCertifications ~ res:", res)
        })

      //  setResponse(res)
     })
    }
  }, [])



  

  return <div>zfizafnzifnfi
    <p>{ JSON.stringify({}) }</p>

  </div>;
}