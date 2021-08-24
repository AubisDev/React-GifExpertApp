
export const getGifs = async( category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=akUYly1Ztg3pxJEH8DZT0pCE1Xz4DwVO`;

    const resp = await fetch( url )
    const data = await resp.json();
    const gifs = data.data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs
   
}