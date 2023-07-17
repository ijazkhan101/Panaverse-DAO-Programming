import React from "react";
import Image from "next/image";

const Navbar = () =>{
    return (
        <div className="py-6  flex">
            <div className="w-36">
                <Image width={500} height={500} src={"/Logo.webp"} alt={"logo"} /> 
            </div>
        </div>
    )
}

export default Navbar