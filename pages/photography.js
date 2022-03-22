import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import getImages from '../components/gallery'
/* eslint-disable @next/next/no-img-element */

export default function Photography(props) {
  return (
    <div className = "h-screen">
      <Header/>
      <div className = "grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 xl:container xl:mx-auto">
          <>
          { props["resources"].map(img =>         
            <div className =" w-full rounded py-1 md:px-1">
              <img src = { img.secure_url } alt = { img.display_name }/>
          </div>)}
          </>
      </div>
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const params = {
    expression: 'folder="samples"'
  }
  const resources  = await getImages(params)
  return {
    props: {
        resources
    }
}
}
