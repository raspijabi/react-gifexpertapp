import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';





export const useFetchGifs = ( category ) => {
   
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        
        getGifs(category)
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category]) //aqui como que le indicamos que la categoria cambia
    //Más bien que va a cambiar cuando la categoria cambie

    return state; //{ data: [], loading: true};
}
