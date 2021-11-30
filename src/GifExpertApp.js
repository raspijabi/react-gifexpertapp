import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () =>{
    //     //agregar un nuevo elemento usando el setCategories
    //     //asi no:
    //     // categories.push('HunterXHunter');
    //     // setCategories( 'HunterXHunter' );
    //     //asi si:
    //     // setCategories(['HunterXHunter',...categories]);
    //     setCategories(cats=>[...cats, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            

            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category}/>
                    ))
                }
            </ol>
            

        </>
    )
}

