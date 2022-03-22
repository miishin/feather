import Link from 'next/link'
import { useState } from "react";
import { BsJustify } from 'react-icons/bs';
import { BsX } from 'react-icons/bs';
import { GiFeather } from 'react-icons/gi';

// https://medium.com/@designbygio/hamburger-menu-with-react-and-tailwind-css-7ddd8c90a082

export default function Header(title) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className = "container flex justify-between px-4 py-8 mx-auto bg-white">
            <Link href="/">
                <GiFeather className = "text-4xl cursor-pointer"/>          
            </Link>
            
            <div className = "flex lg:hidden">
                <div className = "space-y-2" onClick = {() => setMenuOpen((prev) => !prev)}>
                    <BsJustify className = "text-4xl"/>
                </div>

                <div className = {menuOpen ? "showMenu" : "hideMenu"}>

                    <ul className = "flex flex-col items-center justify-between min-h-[250px]">
                        <li className = "border-b border-gray-400 my-8 lowercase">
                            <Link href = "/photography">Photography</Link>
                        </li>
                        <li className = "border-b border-gray-400 my-8 lowercase">
                            <Link href = "/art">Art</Link>
                        </li>
                        <li className = "border-b border-gray-400 my-8 lowercase">
                            <Link href = "/about">About</Link>
                        </li>
                        <li className = "" onClick = {() => setMenuOpen(false)}>
                            <BsX className = "text-4xl my-8"/>
                        </li>
                    </ul>
                </div>
            </div>

            <ul className = "hidden space-x-8 lg:flex">
                <li>
                    <Link href = "/photography">Photography</Link>
                </li>
                <li>
                    <Link href = "/art">Art</Link>
                </li>
                <li>
                    <Link href = "/about">About</Link>
                </li>
            </ul>

            <style>{`
                .hideMenu {
                    display: none;
                }
                .showMenu {
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100vh;
                    top: 0;
                    left: 0;
                    background: white;
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                }
                `}</style>
        </nav>
    )
}