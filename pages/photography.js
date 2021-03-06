import Header from '../components/header'
import Footer from '../components/footer'
import getImages from '../components/cloudinary'
/* eslint-disable @next/next/no-img-element */

export default function Photography(props) {
  return (
    <div className = "flex flex-col min-h-screen">
      <Header/>
      <div className = "px-5 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 xl:container xl:mx-auto items-center flex-grow">
          <>
          { props["resources"].map(img =>         
            <div className =" w-full rounded py-1 md:px-1" key = { img.filename }>
              <img src = { img.secure_url } alt = { img.display_name }/>
          </div>)}
          </>
      </div>
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const folderName = encodeURIComponent("folder=photography")
  const resources  = await getImages(folderName)
  return {
    props: {
        resources
    }
}
}
