import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data: images, loading} = useFetchGifs(category);


    // useEffect( () => {
    //     getGifs(category)
    //     .then(setImages);
    //     //Es lo mismo que poner dentro del then(imgs => setImages(imgs))
    // }, [category])



    return (
        <>
            <h3 className="animate__slideInDown animate__delay-3s animate__slower">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                
                    {
                        images.map( (img) => (
                            <GifGridItem
                                key={img.id}
                                //lo que se usa para pasar la imagen
                                { ...img }
                            />
                        ))
                    }
            </div>
        </>
    )
}
