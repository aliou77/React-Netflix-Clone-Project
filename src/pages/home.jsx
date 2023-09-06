import React, { useState } from 'react';
import Background from '../components/Background';
import { styled } from 'styled-components';
import Header from '../components/Header';
import { goodEmail, setCookie } from '../utils/functions';
import jQuery from "jquery";
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../utils/firebase-config';

const Home = () => {
    const navigate = useNavigate()

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        // if user is not loged in, redirect him to the login page
        if (!currentUser) navigate('/login')
    })

    return (
        <Container>
            <h1 className='text-6xl text-red-700'>Home page</h1>
        </Container>
    );
}

export default Home;

const Container = styled.div`
    background: red;
    padding: 20px;
`;
