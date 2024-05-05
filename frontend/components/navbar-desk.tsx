import type { NextPage } from "next";
import Image from "next/image";

const NavBarDesk: NextPage = () => {


return (
<div className="z-10 absolute bottom-0 h-[10vh] w-full bg-white bg-opacity-40
flex flex-row justify-center items-center gap-[5%]">

    <a href="/scan" className="cursor-pointer hover:scale-110 transition-all ease-in-out duration-300">
        <Image alt="" height="80" width="80" src="../logo-scan.svg"></Image>
    </a>
    
    <a href="/credentials" className="cursor-pointer hover:scale-110 transition-all ease-in-out duration-300">
        <Image alt="" height="80" width="80" src="../logo-credentials.svg"></Image>
    </a>

    <a href="/contacts" className="cursor-pointer hover:scale-110 transition-all ease-in-out duration-300">
        <Image alt="" height="80" width="80" src="../logo-contacts.svg"></Image>
    </a>

    <a href="/profile" className="cursor-pointer hover:scale-110 transition-all ease-in-out duration-300">
        <Image alt="" height="80" width="80" src="../logo-profile.svg"></Image>
    </a>

</div>)}




export default NavBarDesk;