import React from 'react';
import Background from '../components/Background';
import { styled } from 'styled-components';

const Home = () => {
    return (

        <Container>
            <Background />
            <h1 className=''>Home page</h1>
        </Container>
    );
}

export default Home;

const Container = styled.div`
    background-color: transparent;
`;
