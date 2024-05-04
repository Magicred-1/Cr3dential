import type { NextPage } from "next";
import Image from "next/image";

const NavBar: NextPage = () => {


return (
<div className="z-10 absolute bottom-0 h-[10vh] w-full bg-white bg-opacity-40
flex flex-row justify-center items-center gap-4">

    <Image alt="" height="80" width="80" src="../logo-scan.svg"></Image>
    
    <Image alt="" height="80" width="80" src="../logo-credentials.svg"></Image>

    <Image alt="" height="80" width="80" src="../logo-contacts.svg"></Image>

    <Image alt="" height="80" width="80" src="../logo-profile.svg"></Image>

</div>)}




export default NavBar;