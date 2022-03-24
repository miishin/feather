// https://spacejelly.dev/posts/how-to-list-display-cloudinary-image-resources-in-a-gallery-with-next-js-react/

export default async function getImages(folderName) {
    const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/resources/search?${folderName}`, {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.API_KEY + ':' + process.env.API_SECRET).toString('base64')}`
      }
    }).then(r => r.json());
    const { resources } = results
    return resources;
  }