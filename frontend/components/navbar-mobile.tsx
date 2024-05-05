import type { NextPage } from "next";
import Image from "next/image";

const NavBarMobile : NextPage = () => {


return (
<div className="z-10 absolute bottom-0 h-[10vh] w-full bg-white bg-opacity-40
flex flex-row justify-center items-center gap-4">

    <a href="/scan">
        <Image alt="" height="80" width="80" src="../logo-scan.svg"></Image>
    </a>
    
    <a href="/credentials">
        <Image alt="" height="80" width="80" src="../logo-credentials.svg"></Image>
    </a>

    <a href="/contacts">
        <Image alt="" height="80" width="80" src="../logo-contacts.svg"></Image>
    </a>

    <a href="/profile">
        <Image alt="" height="80" width="80" src="../logo-profile.svg"></Image>
    </a>

</div>)}




export default NavBarMobile;