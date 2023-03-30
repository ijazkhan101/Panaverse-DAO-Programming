import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";

export default function Header() {
  return (
    <Wrapper>
      <header className="sticky top-0 flex items-center justify-between px-2 py-6 bg-white ">
        <div>
          <Image src="/panaverselogo.PNG" alt="logo" width={150} height={200} />
        </div>

        <ul className="flex space-x-8 font-medium">
          <li className="py-2">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="py-2">
            <Link href={"/courses"}>Courses</Link>
          </li>
        </ul>
      </header>
    </Wrapper>
  );
}
