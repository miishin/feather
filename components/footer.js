import Link from 'next/link'
import { BsInstagram } from 'react-icons/bs'

export default function Footer(title) {
    return (
        <div className = "sm:container sm:mx-auto flex items-center justify-center pt-6">
            <Link href="https://instagram.com/mihane_art"><BsInstagram className="text-4xl cursor-pointer"/></Link>
        </div>
    )
}