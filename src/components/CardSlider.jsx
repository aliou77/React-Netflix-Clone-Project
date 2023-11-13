import React from 'react';
import Card from './Card';

const CardSlider = ({title, data}) => {
    return (
        <div>
            <h1>{title}</h1>
            <div className='gap-2  card-items'>
                {
                    data.map((movie, index)=>{
                        return <Card movieData={movie} index={index} key={movie.id} />
                    })
                }
            </div>
        </div>
    );
}

export default CardSlider;
