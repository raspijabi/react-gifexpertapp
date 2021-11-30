import React from 'react'

export const GifGridItem = ({ id, title, url}) => {

    return (
        <div className="animate__slideInDown animate__delay-3s animate__slower card">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
