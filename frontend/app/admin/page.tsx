import { useWebAuth } from "@/src/useWebAuth";

function AdminPage() {

    // const webAUTH = useWebAuth();

    return ( 
        <div>
            <h1>Admin Page</h1>


            <button className="button button-primary">
                Get Public Key
            </button>

        </div>

     );
}

export default AdminPage;