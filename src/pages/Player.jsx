import React from 'react'
import video from '../assets/My Name - Official Trailer - Netflix.mkv'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { BsArrowLeft } from 'react-icons/bs'

export default function Player() {
    const navigate = useNavigate()

    return (
        <Container>
            <div className='content w-screen h-screen'>
                <div className="back">
                    <BsArrowLeft onClick={() => navigate(-1)} />
                </div>
                <div className="video">
                    <video src={video} autoPlay loop controls ></video>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .back{
        position: fixed;
        left: 11px;
        color: white;
        top: 4px;
        font-size: 1.7rem;
        z-index: 50;
        cursor: pointer;
    }
    video{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;