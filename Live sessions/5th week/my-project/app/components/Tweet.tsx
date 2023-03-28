import Link from "next/link";
import React from "react";
import { GoKebabHorizontal } from "react-icons/go";
import {AiOutlineHeart} from 'react-icons/ai';
import {FaRetweet} from 'react-icons/fa';
import {AiOutlineUpload} from 'react-icons/ai';
import {AiOutlineBarChart} from 'react-icons/ai';

export default function Tweet() {
  return (
    <div className="max-w-xl my-24 mx-auto p-3 border bg-white flex">
      <img className="h-12 w-12 rounded-full  mr-3" src="ijaz.PNG" alt="ijaz" />
      <div className="w-full">
        <div className="flex">
          <div className="flex">
            <Link href={"https://twitter.com"}>
              <strong className="text-gray-800 mr-1">Ijaz Khan</strong>
              <span className="text-gray-500 mr-1">@ijazkhan</span>
            </Link>
            <span className="text-gray-500 mr-1">&middot;</span>
            <span className="text-gray-500">Mar 23</span>
          </div>
          <div className="ml-auto">
            <GoKebabHorizontal />
          </div>
        </div>

        <div>
          <p>#PakWatch: Corruption rules the roost in PAK, where PM Sharif and his allies use the judicial system to sideline Imran Khan & his 10-point manifesto for PAK's economic development. Speaking of corruption, PAK ranks  140th of 180 countries in the 2022 Corruption Perceptions Index.</p>
        </div>
        <div className="mt-2 flex justify-between">
            <div className="flex items-center">
              <AiOutlineHeart className="mr-2 text-gray-600"/>
              <span className="text-gray-600">190</span>
            </div>
            <div className="flex items-center">
              <FaRetweet className="mr-2 text-gray-600"/>
              <span className="text-gray-600">20</span>
            </div>
            <div className="flex items-center">
              <AiOutlineHeart className="mr-2 text-gray-600"/>
              <span className="text-gray-600">70</span>
            </div>
            <div className="flex items-center">
              <AiOutlineUpload className="mr-2 text-gray-600"/>
              <span className="text-gray-600">90</span>
            </div>
            <div className="flex items-center">
              <AiOutlineBarChart className="mr-2 text-gray-600"/>
              <span className="text-gray-600">30</span>
            </div>
        </div>
      </div>
    </div>
  );
}
