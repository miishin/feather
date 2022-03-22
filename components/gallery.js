// https://spacejelly.dev/posts/how-to-list-display-cloudinary-image-resources-in-a-gallery-with-next-js-react/
export default async function getImages(folderName) {
    const paramString = Object.keys(folderName).map(key => `${key}=${encodeURIComponent(folderName[key])}`).join('&');

    const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`, {
        headers: {
            Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
        }
    }).then(r => r.json());

    return results;
}