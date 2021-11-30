

export const getGifs = async(category) => {

    //petición http en javascript
    const url= `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=KaCtnBWaasrFN5cq27HNMloOUMbxqpsw`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            //nos aseguramos con el ? si viene esa información de la API
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;


}