import React from "react";
import Image from "next/image";
import Link from 'next/link';
export default function Header(){
    return(
        <div className="flex justify-between items-center bg-purple-400">
            <div>
                <Image  src='/Logo.webp' alt="panaverse logo" width={120} height={120}/>
            </div>
            <div>
                <ul className="flex">
                    <li>
                        <Link href='/'> Home</Link>
                    </li>
                    <li>Explore</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <button className="bg-blue-600 px-6 py-2 text-white rounded-lg text-xl font-semibold">Apply</button>
            </div>
        </div>
    )
}