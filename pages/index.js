import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

import photoHeader from '../img/headers/photos.jpeg'

export default function Home() {
  return (
    <div className="h-screen">
      <Header/>
      <div className="h-1/3 bg-photo-header bg-center bg-cover sm:container sm:mx-auto flex items-center justify-center">
        <div className="bg-blue-200 hover:bg-blue-300 text-black font-bold py-2 px-3 rounded-full">
          <Link href="/photography">
            Photography
          </Link>
        </div>
      </div>
      <div className="h-1/3 bg-photo-header bg-center bg-cover sm:container sm:mx-auto flex items-center justify-center">
        <div className="bg-blue-200 hover:bg-blue-300 text-black text-xl font-bold py-3 px-6 rounded-full">
          <Link href="/art">
            Art
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
