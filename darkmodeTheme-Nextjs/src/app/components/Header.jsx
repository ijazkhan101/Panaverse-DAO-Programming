import MenuItem from "./MenuItem";
import {AiFillHome} from 'react-icons/ai';
import {AiFillInfoCircle} from 'react-icons/ai';
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function  Header(){
    return (
        <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-2 ">
        <div className="flex"> 
            <MenuItem title="HOME" address='/' Icon={AiFillHome} />
           <MenuItem title="ABOUT" address='/about' Icon={AiFillInfoCircle} />
        </div>
        
        <div className=""> 
            
        </div>
        
        <div className="flex items-center space-x-5"> 
        <DarkModeSwitch />
            <Link href='/'>
                <h2>
                    <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDB</span> 
                    <span className="text-xl  hidden sm:inline">Clone</span>
                </h2>
            </Link>
        </div>


        </div>
        
    )
}