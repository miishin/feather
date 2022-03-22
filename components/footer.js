import Link from 'next/link'
import { BsInstagram } from 'react-icons/bs'

export default function Footer(title) {
    return (
        <footer className = "sm:container sm:mx-auto flex items-center justify-center pb-8">
            <Link href="https://instagram.com/mihane_art" passHref><BsInstagram className="text-4xl cursor-pointer"/></Link>
        </footer>
    )
}