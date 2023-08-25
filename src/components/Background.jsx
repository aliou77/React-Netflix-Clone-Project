import React from 'react'
import image from '../assets/home-netflix.jpg'
import { styled } from 'styled-components'

export default function Background() {
  return (
    <Container>
      <img className='object-cover' src={image} alt="bacground-img" />
    </Container>
  )
}

const Container = styled.div`
  
  img{
    height: 100vh;
    width: 100vw;
  }
`;