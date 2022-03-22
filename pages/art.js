import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import getImages from '../components/gallery'

export default function Art(props) {
  console.log("getting images")
  console.log("got images:")
  console.log(props)
  return (
    <div className = "h-screen">
      <Header/>
      <div className = "grid grid-cols-1 md:grid-cols-3">
          <>
          { props["resources"].map(img =>         
            <div className=" w-full rounded py-1 md:px-1">
              <img src={img.secure_url}/>
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
  const paramString = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&');

  const folderP = encodeURIComponent('folder="samples"')
  const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/resources/search?${paramString}`, {
      headers: {
          Authorization: `Basic ${Buffer.from(process.env.API_KEY + ':' + process.env.API_SECRET).toString('base64')}`
      }
  }).then(r => r.json());

  const { resources } = results;

  return {
    props: {
        resources
    }
}
}
