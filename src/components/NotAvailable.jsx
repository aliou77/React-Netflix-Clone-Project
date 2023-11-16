import React from 'react'
import styled from 'styled-components'

export default function NotAvailable() {
  return (
    <Container className=''>
        <h1 className='capitalize text-3xl text-center text-red-700 mt-[5rem]'>not movies available for selected genre</h1>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
` 