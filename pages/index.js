import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="max-h-1/3 bg-photo-header bg-center bg-cover sm:container sm:mx-auto flex flex-grow items-center justify-center">
        <div className="bg-blue-200 hover:bg-blue-300 text-black font-bold py-2 px-3 rounded-full">
          <Link href="/photography">
            Photography
          </Link>
        </div>
      </div>
      <div className="max-h-1/3 bg-photo-header bg-center bg-cover sm:container sm:mx-auto flex flex-grow items-center justify-center">
        <div className="bg-blue-200 hover:bg-blue-300 text-black text-xl font-bold py-2 px-3 rounded-full">
          <Link href="/art">
            Artwork
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
