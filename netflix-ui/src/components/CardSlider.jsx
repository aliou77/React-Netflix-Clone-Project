import React, { memo, useRef, useState } from 'react';
import Card from './Card';
import styled from 'styled-components';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import $ from 'jquery'

// memo evite que le composant sois rendu a chque modif du DOM
export default memo(
  function CardSlider({title, data}) {
    const [showControles, setShowControles] = useState(false)
    // const [currentItem, setCurrentItem] = useState(0)
    const listRef = useRef(0) // create a counter
    let currentItem = useRef(0)

    /**
     * carousel features
     * 
     * @param {String} direction the direction of the carousel
     * @returns 
     */
    const handleDirection = (direction)=>{
        
        // debugger carousel done alhamdoulilah
        if(direction === 'left') {
            if(currentItem.current > 0) {
                gotToItem(currentItem.current - 1)
            }else{
                return false;
            }
        }else if(direction === 'right') {
            if(currentItem.current < 10){
                gotToItem(currentItem.current + 1)
            }else{
                return false;
            }
        }
    }

    const gotToItem = (index)=>{
        // const nb_items = $(listRef.current).children().length
        // console.log(index);
        let translateX = index * -100 / 18;
        listRef.current.style.transform = `translateX(${translateX}%)`;
        currentItem.current = index;
    }

    return (
        <Container className='flex flex-col gap-[5rem] desktop-width'
            onMouseEnter={() => setShowControles(true)}
            onMouseLeave={() => setShowControles(false)}
        >
            <div className="content sm:ms-[50px] ms-4">
                <h1 className='text-[32px] my-8 font-bold'>{title}</h1>
                <div className="wrapper slider flex relative">
                    <div className={`slider-action ${!showControles ? "hidden" : ""} flex items-center text-[40px] absolute left-[17px] top-0 h-full z-[100]`}>
                        <AiOutlineLeft onClick={() => handleDirection("left")} className='cursor-pointer' />
                    </div>
                    <div className='flex gap-4 card-items w-max' ref={listRef}>
                        {
                            data.map((movie, index)=>{
                                return <Card movieData={movie} index={index} key={movie.id} />
                            })
                        }
                    </div>
                    <div className={`slider-action ${!showControles ? "hidden" : ""} flex items-center text-[40px] absolute right-[17px] top-0 h-full z-[100]`}>
                        <AiOutlineRight onClick={() => handleDirection("right")} className='cursor-pointer ' />
                    </div>
                </div>               
            </div>
    
        </Container>
    );
}
)
const Container = styled.div`
    .slider, .card-items{
        transform: translateX(0px);
        transition: all .4s;
    }
`

