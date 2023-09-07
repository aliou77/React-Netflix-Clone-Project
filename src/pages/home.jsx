import { styled } from 'styled-components';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../utils/firebase-config';
import Navbar from '../components/Navbar';
import { useState } from 'react';

const Home = () => {
    const navigate = useNavigate()
    const [isScrolled, onScrolled] = useState(false)

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        // if user is not loged in, redirect him to the login page
        if (!currentUser) navigate('/login')
    })

    window.onscroll = () => {
        console.log(window.pageYOffset);
        onScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }


    return (
        <Container>
            <Navbar isScrolled={onscroll} />
        </Container>
    );
}

export default Home;

const Container = styled.div`
    background-color: black;
`;
