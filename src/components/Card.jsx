import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Video from './Video';
import { IoPlayCircleSharp } from 'react-icons/io5';
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri';
import { BsCheck, BsChevronDown, BsHeart } from 'react-icons/bs';

const Card = ({movieData, isLIked = false}) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const showGenders = ()=>{
        var lis = []
        movieData.genres.forEach((genre,i)=>{
            lis.push(<li className='uppercase' key={genre}>{genre}</li>)
        })
        return lis;
    }
    return (
        <Container 
            className='w-[300px] relative'
            onMouseEnter={()=> setIsHovered(true)} 
            onMouseLeave={()=> setIsHovered(false)}>
            <img
                className='w-full h-full z-[10] rounded-[5px]'
                src={`https://image.tmdb.org/t/p/w500${movieData.image}`} title={`${movieData.title ? movieData.title : movieData.name}`} alt={`${movieData.title ? movieData.title : movieData.name}`} />
            {
            isHovered && (
                    <div className="absolute z-[90] top-[-18vh] hover w-[20rem] h-full transition-all duration-200">
                        <div className="flex flex-col gap-2 bg-[#444343] info-container rounded-[10px]">
                            <div className="video-container">
                                <Video classes="w-full rounded-[5px]  z-[5]" />
                            </div>
                            <div className="px-3 content">
                                <h3 className='mb-2'>{`${movieData.title ? movieData.title : movieData.name}`}</h3>
                                <div className="flex justify-between info-content">
                                    <div className="flex gap-3 icons">
                                        <IoPlayCircleSharp 
                                            title='Play'
                                            onClick={()=> navigate('/player')} 
                                        />
                                        <RiThumbUpFill title='Like' />
                                        <RiThumbDownFill title='Dislike' />
                                        {
                                            isLIked ? (
                                                <BsCheck title='Remove from the list' />
                                            ) : (
                                                <BsHeart title='Add to my list' />
                                            )
                                        }
                                        
                                    </div>
                                    <div className="icon-chevron pe-3">
                                        <BsChevronDown title='More info'/>
                                    </div>
                                </div>
                                <div className="mt-3 genres">
                                    <ul className='flex gap-2 pb-3 font-bold'>
                                        {
                                            showGenders()
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </Container>
    );
}
const Container = styled.div`
    div.video-container{
        video{
            width: 100%;
            object-fit: cover;
        }
    }
    .icons{
        transition: all .4s;
        svg, .icon-chevron svg{
            font-size: 24px;
            cursor: pointer;
            transition: all .4s;
        }
        svg:hover, .icon-chevron svg:hover{
            color: #00000094;
        }
    }
    .icon-chevron svg{
        font-size: 24px;
        cursor: pointer;
        transition: all .4s;
    }
    .icon-chevron svg:hover{
        color: #00000094;
    }

`;
export default Card;
