import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchGenres, fetchMovies, fetchMoviesByGenre } from '../store'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import NotAvailable from '../components/NotAvailable'
import SelectGenres from '../components/SelectGenres'

export default function Movies() {
    const navigate = useNavigate()
    const [isScrolled, setIsScrolled] = useState(false)
    const dispatch = useDispatch()
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded)
    const movies = useSelector((state) => state.netflix.movies)
    const genres = useSelector((state) => state.netflix.genres)
    // const moviesByGenre = useSelector((state) => state.netflix.moviesByGenre)
    // console.log(moviesByGenre);
    console.log(movies);

    useEffect(() => {
        dispatch(fetchGenres())
    }, [])

    useEffect(() => {
        // when genres fetched then we fetch all movies via genres fetched with fetchGenres() function
        if (genresLoaded) {
            dispatch(fetchMovies({ type: "movie" }))
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
    <Container className='text-white'>
        <div className="navbar">
            <Navbar isScrolled={isScrolled} />
        </div>
        <div className='mt-[5rem]'></div>
        <div className='select-genres'>
            <SelectGenres genres={genres} type={"movie"} />
        </div>
        <div className="datas">
            {
                movies.length ? <Slider movies={movies} place={"movies"} /> : <NotAvailable />
            }
        </div>
        <Footer />
    </Container>
  )
}

const Container = styled.div`

`