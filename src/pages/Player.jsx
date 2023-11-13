import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { BsArrowLeft } from 'react-icons/bs'
import Video from '../components/Video'

export default function Player() {
    const navigate = useNavigate()

    return (
        <Container>
            <div className='w-screen h-screen content'>
                <div className="back">
                    <BsArrowLeft onClick={() => navigate(-1)} />
                </div>
                <Video/>
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