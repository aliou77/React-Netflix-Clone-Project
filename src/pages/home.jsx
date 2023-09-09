import { styled } from 'styled-components';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../utils/firebase-config';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import hero from '../assets/hero.jpg'
import { FaPlay } from 'react-icons/fa6'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, fetchGenres } from '../store';


const Home = () => {
    const navigate = useNavigate()
    const [isScrolled, setIsScrolled] = useState(false)
    const dispatch = useDispatch()
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded)
    const movies = useSelector((state) => state.netflix.movies)
    console.log(movies);
    useEffect(() => {
        dispatch(fetchGenres())
    }, [])

    useEffect(() => {
        // when genres fetched then we fetch all movies via genres fetched with fetchGenres() function
        if (genresLoaded) {
            dispatch(fetchMovies({ type: "all" }))
        }
    }, [genresLoaded])


    onAuthStateChanged(firebaseAuth, (currentUser) => {
        // if user is not loged in, redirect him to the login page
        if (!currentUser) navigate('/login')
    })

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }


    return (
        <Container>
            <Navbar isScrolled={isScrolled} />
            <div className="hero relative">
                <div className="bg-home w-full">
                    <img src={hero} alt="Hero image" className='w-screen h-screen ' />
                </div>
                <div className="container absolute bottom-[5rem] ms-[5rem]">
                    <h1 className='text-[5rem] text-white mb-2 font-extrabold'>MY NAME</h1>
                    <div className="buttons flex items-center gap-8">
                        <button className='flex items-center gap-[10px] bg-white' onClick={() => navigate('/player')}>
                            <FaPlay /> <span>Play</span>
                        </button>
                        <button className='flex items-center gap-[10px] bg-[#7571718c] text-white'>
                            <AiOutlineInfoCircle /> <span>More info</span>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </Container>
    );
}

export default Home;

const Container = styled.div`
    background-color: black;
    h1{
        font-family: 'Josefin Sans', sans-serif;
        line-height: 1;
        letter-spacing: -7px;
    }
    .hero{
        transition: all .4s;
    }
    .buttons button{
        border: 1px solid transparent;
        border-radius: 5px;
        padding: 3px 17px;
        font-size: 23px;
        cursor: pointer;
        transition: opaicty .3s;
        &:hover{
            opacity: 0.8;
        }
    }
`;
