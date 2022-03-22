// https://spacejelly.dev/posts/how-to-list-display-cloudinary-image-resources-in-a-gallery-with-next-js-react/
export default async function getImages(options = {}) {
    const params = {
      ...options
    }
    const paramString = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&');
  
    const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/resources/search?${paramString}`, {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.API_KEY + ':' + process.env.API_SECRET).toString('base64')}`
      }
    }).then(r => r.json());
    
    const { resources } = results
    return resources;
  }