"use client"

import XRPLButton from "@/src/XRPLButton";

function AdminPage() {

    // const webAUTH = useWebAuth();

    return ( 
        <div>
            <h1>Admin Page</h1>

            <XRPLButton isAdmin />
            
        </div>

     );
}

export default AdminPage;