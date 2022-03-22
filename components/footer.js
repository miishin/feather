import Link from 'next/link'
import { BsInstagram } from 'react-icons/bs'

export default function Footer(title) {
    return (
        <div className = "sm:container sm:mx-auto flex items-center justify-center pt-6">
            <Link href="https://instagram.com/mihanesahara"><BsInstagram className="text-4xl"/></Link>
        </div>
    )
}